const express = require('express')
const router = express.Router()

router.use(function(req, res, next) {
  if (!req.session.data['current-council']) {
    res.locals.data['current-council'] = 'Buckinghamshire County Council';
  }

  if (!req.session.data['find-badge-url']) {
    res.locals.data['find-badge-url'] = 'search-for-a-badge';
  }

  if (req.session.data['sign-in-email']) {
    if (req.session.data['sign-in-email'].includes ('enforce')) {
      res.locals.enforcerClass = 'enforcer-view';
    }
  }

  res.locals.applicationsTableArray = [];

  next();
});

router.get('/', function (req, res) {
  res.redirect('manage-blue-badges/sign-in');
});

router.get('/sign-in', function (req, res) {
  res.locals.formAction = '/manage-blue-badges/sign-in-backend';
  res.render('manage-blue-badges/sign-in', {'title':'Sign in'})
  req.session.destroy()
});

router.get('/sign-in-backend', function (req, res) {
  if (req.session.data['sign-in-email'].includes ('enforce1')) {
    res.redirect('/manage-blue-badges/find-by-badge-number?find-badge-url=find-by-badge-number');
  } else if (req.session.data['sign-in-email'].includes ('enforce2')) {
    res.redirect('/manage-blue-badges/search-for-a-badge?find-badge-url=search-for-a-badge');
  } else {
    res.redirect('/manage-blue-badges/new-applications-generated');
  }
});

router.get('/find-by-badge-number', function (req, res) {
  res.render('manage-blue-badges/find-by-badge-number', 
    {'title':'Enter badge number','search_class':'active', 'enforcerClass': 'enforcer-view'})
})

router.get('/view-badge-enforcer', function (req, res) {
  res.render('manage-blue-badges/view-badge-enforcer', 
    {'title':'Badge details','search_class':'active'})
})

router.get('/enforcer-search-backend', (req, res) => {
  const search = req.session.data['badge-search'].replace(/ /g,'').toUpperCase()
  const badgeholder = req.session.data['badgeholders'].filter(badgeholder => badgeholder.shortcode === search)

  res.locals.badgeholder = badgeholder[0]

  if(search == "F4G3D3") {
    res.render('manage-blue-badges/badge-results', 
    {'title':'Multiple badges found','search_class':'active'})
  } else if (badgeholder == false) {
    res.render('manage-blue-badges/no-results', 
    {'title':'No results found','search_class':'active'})
  } else {
    res.render('manage-blue-badges/view-badge-enforcer', 
    {'title':'Badge details','search_class':'active'})
  }
})

router.get('/view-badge-full', (req, res) => {
  const search = req.session.data['badge-search'].replace(/ /g,'').toUpperCase()
  const badgeholder = req.session.data['badgeholders'].filter(badgeholder => badgeholder.shortcode === search)

  res.locals.badgeholder = badgeholder[0]

  res.render('manage-blue-badges/view-badge-full', 
  {'title':'View badge','search_class':'active'})
})

router.get('/search-results-backend', (req, res) => {
  let search = ''
  let badgeholder = ''

  if(req.session.data['badge-search-number'] !== "") {
    search = req.session.data['badge-search-number'].replace(/ /g,'').toUpperCase()
    badgeholder = req.session.data['badgeholders'].filter(badgeholder => badgeholder.shortcode === search)

    res.locals.badgeholder = badgeholder[0]

    res.render('manage-blue-badges/view-badge-full', 
    {'title':'View badge','search_class':'active'})

  } else if(req.session.data['badge-search'] !== "") {
    search = req.session.data['badge-search'].replace(/ /g,'').toUpperCase()
    badgeholder = req.session.data['badgeholders'].filter(badgeholder => badgeholder.shortcode === search)

    res.locals.badgeholder = badgeholder[0]

    res.render('manage-blue-badges/search-results', 
      {'title':'Badge details','search_class':'active'})

  } else {
    search = req.session.data['badge-search-postcode'].replace(/ /g,'').toUpperCase()
    badgeholder = req.session.data['badgeholders'].filter(badgeholder => badgeholder.shortcode === search)

    res.locals.badgeholder = badgeholder[0]

    res.render('manage-blue-badges/search-results', 
      {'title':'Badge details','search_class':'active'})

  }
})

router.get('/new-applications-generated', (req, res) => {
  const applications = req.session.data['badgeApplications']

  applications.forEach(function(application) {
    var applicationRowObject = {
                                  "applicantName": application.fullName,
                                  "applicantNINO": application.nino,
                                  "applicantDOB": application.dateOfBirth,
                                  "applicantEligibility": application.eligibilityShort,
                                  "applicationType": application.applicationType,
                                  "badgeFlag": application.badgeFlag,
                                  "applicantSubmittedDate": application.applicationDate
                                };

    res.locals.applicationsTableArray.push(applicationRowObject);
  });

  res.render('manage-blue-badges/new-applications-generated', 
  {'title':'Applications','new_class':'active'})
})

router.get('/new-application-generated', (req, res) => {
  const appnino = req.session.data['application-gen-nino'].replace('%20','').toUpperCase()
  const application = req.session.data['badgeApplications'].filter(application => application.nino === appnino)

  res.locals.application = application[0]

  res.render('manage-blue-badges/new-application-generated', 
  {'title':'View application','new_class':'active'})
})

router.get('/reapplications', (req, res) => {
  const applications = req.session.data['badgeReApplications']

  applications.forEach(function(application) {
    var applicationRowObject = {
                                  "applicantName": application.fullName,
                                  "applicantNINO": application.nino,
                                  "applicantDOB": application.dateOfBirth,
                                  "applicantEligibility": application.eligibilityShort,
                                  "applicationType": application.applicationType,
                                  "applicantSubmittedDate": application.applicationDate
                                };

    res.locals.applicationsTableArray.push(applicationRowObject);
  });

  res.render('manage-blue-badges/reapplications', 
  {'title':'Reapplications','renewals_class':'active'})
})

router.get('/reapplication', (req, res) => {
  const appnino = req.session.data['application-gen-nino'].replace('%20','').toUpperCase()
  const application = req.session.data['badgeReApplications'].filter(application => application.nino === appnino)

  res.locals.application = application[0]

  res.render('manage-blue-badges/new-application-generated', 
  {'title':'View reapplication','renewals_class':'active'})
})

router.get('/reset***REMOVED***', function (req, res) {
  res.locals.formAction = '/manage-blue-badges/reset-email-sent';
  req.session.data['show'] = undefined;
  res.render('manage-blue-badges/reset- ***REMOVED***})
});

router.get('/reset-email-sent', function (req, res) {
  res.locals.formAction = '/manage-blue-badges/reset***REMOVED***';
  res.render('manage-blue-badges/reset-email-sent', {'title':'Link sent'})
});

router.get('/error-404', function (req, res) {
  res.render('manage-blue-badges/error-404', {'title':'Page not found'})
});

router.get('/error-500', function (req, res) {
  res.render('manage-blue-badges/error-500', {'title':'Something went wrong'})
});

router.get('/error-sessions', function (req, res) {
  res.render('manage-blue-badges/error-sessions', {'title':'You need to start again'})
});

router.get('/link-expired', function (req, res) {
  res.locals.formAction = '/manage-blue-badges/reset***REMOVED***';
  res.render('manage-blue-badges/link-expired', {'title':'Link expired'})
});

router.get('/set-your***REMOVED***', function (req, res) {
  res.locals.formAction = '/manage-blue-badges/all-applications';
  res.render('manage-blue-badges/set-your- ***REMOVED***})
});

router.get('/all-applications', function (req, res) {
  res.render('manage-blue-badges/all-applications', {'title':'All applications','app_class':'active'})
});

router.get('/new-applications', function (req, res) {
  res.render('manage-blue-badges/new-applications', {'title':'New applications','new_class':'active'})
})

router.get('/new-application', function (req, res) {
  res.render('manage-blue-badges/new-application', {'title':'View new application','app_class':'active'})
})

router.get('/new-application-walking', function (req, res) {
  res.render('manage-blue-badges/new-application-walking', {'title':'View new application','app_class':'active'})
})

router.get('/new-application-walking-2', function (req, res) {
  res.render('manage-blue-badges/new-application-walking-2', {'title':'View new application','app_class':'active'})
})

router.get('/new-application-arms', function (req, res) {
  res.render('manage-blue-badges/new-application-arms', {'title':'View new application','app_class':'active'})
})

router.get('/new-application-child-bulky', function (req, res) {
  res.render('manage-blue-badges/new-application-child-bulky', {'title':'View new application','app_class':'active'})
})

router.get('/new-application-child-near', function (req, res) {
  res.render('manage-blue-badges/new-application-child-near', {'title':'View new application','app_class':'active'})
})

router.get('/manage-users', function (req, res) {
  req.session.data['success'] = undefined;
  res.render('manage-blue-badges/manage-users', {'title':'Manage users','manage_class':'active'})
});

router.get('/manage-las', function (req, res) {
  req.session.data['success'] = undefined;
  res.render('manage-blue-badges/manage-las', {'title':'Manage local councils','managela_class':'active'})
});

router.get('/edit-la-details', function (req, res) {
  res.render('manage-blue-badges/edit-la-details', {'title':'Manage local council','managela_class':'active'})
});

router.get('/users-results', function (req, res) {
  res.locals.searchValue = req.session.data['search-box'];
  res.render('manage-blue-badges/users-results', {'title':'Manage users','manage_class':'active'})
});

router.get('/create-user', function (req, res) {
  res.render('manage-blue-badges/create-user', {'title':'Create a new user','manage_class':'active'})
});

router.get('/edit-details', function (req, res) {
  res.render('manage-blue-badges/edit-details', {'title':'User details','manage_class':'active'})
});

router.get('/remove-user', function (req, res) {
  res.render('manage-blue-badges/remove-user', {'title':'Remove user','manage_class':'active'})
});

router.get('/order-a-badge', function (req, res) {
  req.session.data = undefined;
  res.render('manage-blue-badges/order-a-badge/index', {'title':'Order a badge','order_class':'active', 'formAction':'/manage-blue-badges/order-a-badge/details'})
});

router.get('/order-a-badge/details', function (req, res) {
  if (req.session.data['badge-type'] === 'person') {
    res.locals.title = 'Personal details';
  } else {
    res.locals.title = 'Organisation details';
  }

  res.render('manage-blue-badges/order-a-badge/details', {'order_class':'active', 'formAction':'/manage-blue-badges/order-a-badge/processing'});
});

router.get('/order-a-badge/change-details', function (req, res) {
  if (req.session.data['badge-type'] === 'person') {
    res.locals.title = 'Personal details';
  } else {
    res.locals.title = 'Organisation details';
  }
  res.render('manage-blue-badges/order-a-badge/details', {'title':'Order a badge','order_class':'active', 'formAction':'/manage-blue-badges/order-a-badge/check'})
});

router.get('/order-a-badge/processing', function (req, res) {
  var todayDate = new Date();
  var startDay = todayDate.getDate();
  var startMonth = todayDate.getMonth()+1; //January is 0!
  var startYear = todayDate.getFullYear();
  var expiryDatePlus3Years = new Date(new Date().setFullYear(new Date().getFullYear() + 3));
  var expiryDate = new Date(expiryDatePlus3Years.setDate(expiryDatePlus3Years.getDate() - 1));
  var expiryDay = expiryDate.getDate();
  var expiryMonth = expiryDate.getMonth()+1; // January is 0!
  var expiryYear = expiryDate.getFullYear();

  res.render('manage-blue-badges/order-a-badge/processing', {'title':'Processing','order_class':'active',
    'startDay': startDay, 'startMonth': startMonth, 'startYear': startYear,
    'expiryDay': expiryDay, 'expiryMonth': expiryMonth, 'expiryYear': expiryYear
  });
});

router.get('/order-a-badge/check', function (req, res) {
  res.render('manage-blue-badges/order-a-badge/check', {'title':'Check order','order_class':'active'})
})

router.get('/order-a-badge/badge-ordered', function (req, res) {
  req.session.destroy();
  res.render('manage-blue-badges/badge-ordered', {'order_class':'active'})
})

router.get('/reports', function (req, res) {
  res.render('manage-blue-badges/reports', {'title':'Reports','reports_class':'active'})
})

router.get('/search-for-a-badge', function (req, res) {
  res.render('manage-blue-badges/search-for-a-badge', {'title':'Find a badge','search_class':'active', 'enforcerClass': 'enforcer-view'})
})

router.get('/search-results', function (req, res) {
  res.locals.searchValue = req.session.data['badge-search'];
  res.render('manage-blue-badges/search-results', {'title':'Find a badge','search_class':'active'})
})

router.get('/view-badge', function (req, res) {
  res.render('manage-blue-badges/view-badge', {'title':'View badge','search_class':'active'})
})

router.get('/view-badge-external', function (req, res) {
  res.render('manage-blue-badges/view-badge-external', {'title':'View badge','search_class':'active'})
})

router.get('/replacements', function (req, res) {
  res.render('manage-blue-badges/replacements', {'title':'Replacements','replace_class':'active'})
})

router.get('/view-replacement', function (req, res) {
  res.render('manage-blue-badges/replacement-request', {'title':'View replacement','replace_class':'active'})
})

router.get('/replace-badge', function (req, res) {
  res.render('manage-blue-badges/replace-badge', {'title':'Order a replacement badge','search_class':'active'})
})

router.get('/replacement-ordered', function (req, res) {
  res.render('manage-blue-badges/replacement-ordered', {'title':'Replacement ordered','search_class':'active'})
})

router.get('/changes', function (req, res) {
  res.render('manage-blue-badges/changes', {'title':'Changes','changes_class':'active'})
})

router.get('/view-change', function (req, res) {
  res.render('manage-blue-badges/change-request', {'title':'View change request','change_class':'active'})
})

router.get('/change-details', function (req, res) {
  res.render('manage-blue-badges/change-details', {'title':'Change badge details','change_class':'active'})
})

router.get('/cancel-badge', function (req, res) {
  res.render('manage-blue-badges/cancel-badge', {'title':'Cancel badge','search_class':'active'})
})

router.get('/badge-cancelled', function (req, res) {
  res.render('manage-blue-badges/badge-cancelled', {'search_class':'active'})
})

router.get('/view-my-details', function (req, res) {
  res.render('manage-blue-badges/view-my-details', {'title':'View my details','view_class':'active'})
})

router.get('/renewals', function (req, res) {
  res.render('manage-blue-badges/renewals', {'title':'Renewals','renewals_class':'active'})
})

router.get('/renewal-walking', function (req, res) {
  res.render('manage-blue-badges/renewal-walking', {'title':'View renewal','renewals_class':'active'})
})

router.get('/settings', function (req, res) {
  res.render('manage-blue-badges/settings', {'title':'API credentials','settings_class':'active'})
})

router.get('/credentials-updated', function (req, res) {
  res.render('manage-blue-badges/credentials-updated', {'settings_class':'active'})
})


router.get('/replacements', function (req, res) {
  res.render('manage-blue-badges/replacements', {'title':'Replacements','replacements_class':'active'})
})

router.get('/updates', function (req, res) {
  res.render('manage-blue-badges/updates', {'title':'Updates','updates_class':'active'})
})

router.get('/cancellations', function (req, res) {
  res.render('manage-blue-badges/cancellations', {'title':'Cancellations','cancellations_class':'active'})
})

module.exports = router
