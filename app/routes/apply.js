const express = require('express')
const router = express.Router()

// Set the right pronouns
router.use(function(req, res, next) {
  res.locals.serviceName = "Apply for a Blue Badge";
  res.locals.homepageUrl = "/apply-for-a-blue-badge-blue-badge/";
  res.locals.serviceUrl = "/apply-for-a-blue-badge/";
  var applicant = req.session.data['applicant'];
  res.locals.my = applicant === 'someone-else' ? 'their' : 'my';
  res.locals.me = applicant === 'someone-else' ? 'them' : 'me';
  res.locals.you = applicant === 'someone-else' ? 'they' : 'you';
  res.locals.your = applicant === 'someone-else' ? 'their' : 'your';
  res.locals.youOrThem = applicant === 'someone-else' ? 'them' : 'you';
  res.locals.yourself = applicant === 'someone-else' ? 'the applicant' : 'yourself';
  res.locals.iThey = applicant === 'someone-else' ? 'they' : 'I';
  res.locals.am = applicant === 'someone-else' ? 'are' : 'am';

  if (!req.session.data['council-name']) {
    res.locals.data['council-name'] = 'your local council';
  }

  if (req.session.data['nation'] === 'scotland') {
    res.locals.feePrice = '£20';
  } else {
    res.locals.feePrice = '£10';
  }

  var application = "application";
  switch(req.session.data['renewal-or-new-application']) {
    case "new":
      application = "application";
      break;
    case "renewal":
      application = "reapplication";
      break;
    default:
      application = "application";
      break;
  }
  res.locals.application = application;
  next();
});

/* 
  ---------------------------------------------------------------
  Check before you start
  --------------------------------------------------------------- 
*/

// Check eligibility

const checkEligibilityTemplatePath = 'apply-for-a-blue-badge/check-eligibility/';

router.get('/', function (req, res) {
  res.locals.hideServiceName = 'yes';
  res.render('apply-for-a-blue-badge/index.html');
});

router.get('/apply-for-a-blue-badge/task-list', function (req, res) {
  res.render('apply-for-a-blue-badge/task-list');
});

router.get('/apply-for-a-blue-badge/save-enter', function (req, res) {
  res.render('apply-for-a-blue-badge/save-enter');
});

router.get('/apply-for-a-blue-badge/progress-saved', function (req, res) {
  res.render('apply-for-a-blue-badge/progress-saved');
});

router.get('/apply-for-a-blue-badge/save-return', function (req, res) {
  res.render('apply-for-a-blue-badge/save-return');
});

router.get('/apply-for-a-blue-badge/save-enter-code', function (req, res) {
  res.render('apply-for-a-blue-badge/save-enter-code');
});

router.get('/check-eligibility/', function (req, res) {
  res.render(checkEligibilityTemplatePath+'index.html', {'title':'Who are you applying for?'})
  req.session.destroy();
});

router.get('/check-eligibility/your-council-backend', function (req, res) {
  if (req.query.postcode) {
    req.session.data['council-name'] = 'Manchester city council';
    if(req.query.postcode.indexOf("BT1") >= 0) {
      res.redirect('/apply-for-a-blue-badge/check-eligibility/nir-explain');
    } else {
      res.redirect('/apply-for-a-blue-badge/check-eligibility/your-council');
    }
  } else {
    if(req.session.data['council-name'] == 'Northern Ireland') {
      res.redirect('/apply-for-a-blue-badge/check-eligibility/nir-explain');
    } else if(
        req.session.data['council-name'] == 'Cambridgeshire County Council' ||
        req.session.data['council-name'] == 'Dorset County Council' ||
        req.session.data['council-name'] == 'Essex County Council' ||
        req.session.data['council-name'] == 'East Riding of Yorkshire Council'
        ) {
      res.redirect('/apply-for-a-blue-badge/check-eligibility/council-not-participating');
    } else {
      res.redirect('/apply-for-a-blue-badge/check-eligibility/your-council');
    }
  } 
});

router.get('/check-eligibility/existing-badge/', function (req, res) {
  req.session.data['show'] = undefined;
  res.locals.formAction = '/apply-for-a-blue-badge/check-eligibility/existing-badge/index-backend';
  res.render(checkEligibilityTemplatePath+'existing-badge/index.html')
});

router.get('/check-eligibility/existing-badge/index-backend', function (req, res) {
  switch (req.session.data['renewal-or-new-application']) {
    case "renewal":
      var blueBadgeNumber = req.session.data['existing-blue-badge-number'];
      if (blueBadgeNumber.indexOf('1111') === 0 && blueBadgeNumber.lastIndexOf('1111') === blueBadgeNumber.length-4) {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/existing-badge/not-for-renewal');
      } else if (blueBadgeNumber.indexOf('3333') === 0 && blueBadgeNumber.lastIndexOf('3333') === blueBadgeNumber.length-4) {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/existing-badge?show=errors&existing=yes');
      } else if (blueBadgeNumber.indexOf('4444') === 0 && blueBadgeNumber.lastIndexOf('4444') === blueBadgeNumber.length-4) {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/existing-badge/need-to-reapply');
      } else {
        if (req.session.data['applicant'] === "organisation") {
          res.redirect('/apply-for-a-blue-badge/check-eligibility/decision-organisation-renew');
        } else {
          res.redirect('/apply-for-a-blue-badge/check-eligibility/decision-renew');
        }
      }
      break;
    case "new":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/enter-age');
      break;
    default:
      res.redirect('/apply-for-a-blue-badge/check-eligibility/enter-age');
      break;
  }
});

router.get('/check-eligibility/existing-badge/review-backend', function (req, res) {
  switch (req.session.data['renewal-council-has-changed']) {
    case "yes":
      req.session.data['council-name'] = 'Manchester city council';
      res.redirect('/apply-for-a-blue-badge/check-eligibility/enter-age');
      break;
    case "no":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/find-your-council');
      break;
    default:
      res.redirect('/apply-for-a-blue-badge/check-eligibility/find-your-council');
      break;
  }
});



router.get('/check-eligibility/benefits-backend', function (req, res) {
  switch (req.session.data['benefit']) {
    case "none":
      if(req.session.data['nation'] === "scotland") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-did-you-get-dla');
      } else {
        res.render('apply-for-a-blue-badge/check-eligibility/disability');
      }
      break;
    case "aa":
      req.session.data['benefit'] = "none";
      req.session.data['attendance-allowance'] = "true";
      res.redirect('/apply-for-a-blue-badge/check-eligibility/attendance-allowance');
      break;
    case "war-pensioners":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "pip":
      if(req.session.data['council-name'] == 'Northern Ireland') {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');  
      } else  {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-how-many-moving');  
      }
      break;
    case "dla":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/dla-higher-rate');
      break;
    case "armed-forces": 
      res.redirect('/apply-for-a-blue-badge/check-eligibility/afcs-received-lump');
      break;
    }
});

router.get('/check-eligibility/pip-dla-backend', function (req, res) {
  switch (req.session.data['pip-dla']) {
    case "yes":
      req.session.data['benefit'] = "dla";
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "no":
      // if(req.session.data['benefit'] == "none") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-mandatory-reconsideration');
      // } else {
      //   res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');  
      // }
      break;
    }
});


router.get('/check-eligibility/pip-mandatory-backend', function (req, res) {
  switch (req.session.data['pip-mandatory']) {
    case "yes":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "no":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      break;
    }
});

router.get('/check-eligibility/pip-moving-backend', function (req, res) {
  switch (req.session.data['pip-moving']) {
    case "more-than-8":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "less-than-8":
      if(req.session.data['nation'] === "scotland" || req.session.data['nation'] === "wales") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-how-many-planning-following');
      } else {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-10-distress'); 
      }
      break;
    }
});

router.get('/check-eligibility/pip-planning-backend', function (req, res) {
  switch (req.session.data['pip-planning']) {
    case "more-than-12":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "less-than-12":
      if(req.session.data['nation'] === "scotland") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-did-you-get-dla');
      } else {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');  
      }
      break;
    }
});

router.get('/check-eligibility/pip-10-distress-backend', function (req, res) {
  switch (req.session.data['pip-10-distress']) {
    case "10-in-distress":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/pip-10-distress-which');
      break;
    case "not-10-in-distress":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      break;
    }
});

router.get('/check-eligibility/pip-10-distress-which-backend', function (req, res) {
  switch (req.session.data['pip-10-distress-which']) {
    case "10-in-distress-correct":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "not-10-in-distress-false":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      break;
    }
});

router.get('/check-eligibility/dla-higher-backend', function (req, res) {
  switch (req.session.data['dla-higher']) {
    case "yes":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "no":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      break;
    }
});

router.get('/check-eligibility/afcs-lump-backend', function (req, res) {
  switch (req.session.data['afcs-lump']) {
    case "yes":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/afcs-permanent-substantial');
      break;
    case "no":
      if(req.session.data['nation'] === "wales") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/afcs-mental-disorder');
      } else {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      }
      break;
    }
});

router.get('/check-eligibility/afcs-permanent-backend', function (req, res) {
  switch (req.session.data['afcs-permanent']) {
    case "yes":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "no":
      if(req.session.data['nation'] === "wales") {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/afcs-mental-disorder');
      } else {
        res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      }
      break;
    }
});

router.get('/check-eligibility/afcs-mental-backend', function (req, res) {
  switch (req.session.data['afcs-mental']) {
    case "yes":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/decision');
      break;
    case "no":
      res.redirect('/apply-for-a-blue-badge/check-eligibility/disability');
      break;
    }
});

router.get('/check-eligibility/pip-10-distress', function (req, res) {
  res.render(checkEligibilityTemplatePath+'pip-10-distress');
});

router.get('/check-eligibility/pip-did-you-get-dla', function (req, res) {
  res.render(checkEligibilityTemplatePath+'pip-did-you-get-dla');
});

router.get('/check-eligibility/disability-backend', function (req, res) {
  if (req.session.data['disability'] === 'problems-walking') {
    res.redirect('/apply-for-a-blue-badge/check-eligibility/walking');
  } else if (req.session.data['disability'] === 'non-physical') {
    res.redirect('/apply-for-a-blue-badge/check-eligibility/non-physical');
  } else {
    if(req.session.data['disability'] === 'none') {
      res.render(checkEligibilityTemplatePath+'decision-not-eligible');
    } else {
      res.render(checkEligibilityTemplatePath+'decision');  
    }
    
  }
});

router.get('/check-eligibility/non-physical-backend', function (req, res) {
  if (req.session.data['disability-non-physical'].includes('none')) {
    res.render(checkEligibilityTemplatePath+'decision-not-eligible');
  } else {
    res.render(checkEligibilityTemplatePath+'decision');
  }
});

router.get('/check-eligibility/walking-backend', function (req, res) {
  if (req.session.data['disability-walking'].includes('none')) {
    res.render(checkEligibilityTemplatePath+'decision-not-eligible');
  } else {
    res.render(checkEligibilityTemplatePath+'decision');
  }
});


router.get('/check-eligibility/enter-age', function (req, res) {
  if (req.session.data['applicant'] === 'organisation') {
    res.redirect('/apply-for-a-blue-badge/check-eligibility/org-care-for');
  } else {
    res.render(checkEligibilityTemplatePath+'enter-age');
  }
});

router.get('/check-eligibility/blind-backend', function (req, res) {
  if (req.session.data['disability'] === 'blind') {
    res.render(checkEligibilityTemplatePath+'decision');
  } else {
    res.render(checkEligibilityTemplatePath+'benefits');
  }
});


router.get('/check-eligibility/org-care-for-backend', function (req, res) {
  if (req.session.data['org-care-for'] === 'no') {
    res.render(checkEligibilityTemplatePath+'decision-not-eligible');
  } else {
    res.render(checkEligibilityTemplatePath+'org-transport');
  }
});

router.get('/check-eligibility/org-transport-backend', function (req, res) {
  if (req.session.data['org-transport'] === 'no') {
    res.render(checkEligibilityTemplatePath+'decision-not-eligible');
  } else {
    res.render(checkEligibilityTemplatePath+'decision-organisation');
  }
});

/* 
  ---------------------------------------------------------------
  Prepare application
  --------------------------------------------------------------- 
*/

function sendBackToCheckAnswers(query, nextAction, checkSection) {
  console.log("called");
  var locals;
  if (query.change === 'true') {
    console.log('true');
    locals = {
      'formAction': checkSection,
      'submitLabel': 'Update',
      'pagechange': '?change=true'
    }
  } else if (query.change === 'true-final') {
    console.log('true');
    locals = {
      'formAction': checkSection,
      'submitLabel': 'Update',
      'pagechange': '?change=true&final=true'
    }
  } else {
    console.log('false');
    locals = {
      'formAction': nextAction,
      'submitLabel': 'Continue'
    }
  } 
  return locals;
}

// Personal details

const personDetailsPath = '/apply-for-a-blue-badge/personal-details/';
const personDetailsTemplatePath = 'apply-for-a-blue-badge/prepare/personal-details/';

router.get('/personal-details', function (req, res) {
  res.redirect(personDetailsPath+'name');
})

router.get('/personal-details/name', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'dob','check-personal'))
  res.render(personDetailsTemplatePath+'name')
})

router.get('/personal-details/dob', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'gender','check-personal'))
  res.render(personDetailsTemplatePath+'dob')
})

router.get('/personal-details/gender', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'nino','check-personal'))
  res.render(personDetailsTemplatePath+'gender')
})

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

router.get('/personal-details/nino', function (req, res) {
  var dobYear = req.session.data['dob-year'],
      dobMonth = req.session.data['dob-month'],
      dobDay = req.session.data['dob-day'];

  var theirAge = getAge("" + dobYear + '/' + dobMonth + '/' + dobDay + "");

  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'your-address','check-personal'))
  res.locals.data['real-age'] = theirAge;

  if(theirAge >= 16) {
    res.render(personDetailsTemplatePath+'nino')
  } else {
    res.redirect(personDetailsPath+'your-address?real-age='+theirAge);
  }
  
})

router.get('/personal-details/your-address', function (req, res) {
  if (req.session.data['postcode-for-council'] !== '') {
    res.redirect(personDetailsPath+'select-your-address-list');
  } else {
    if (req.query.change === 'true') {
      res.locals.formAction = 'select-address?change=true';
    } else {
      res.locals.formAction = 'select-address';
    }
    res.locals.submitLabel = 'Find address';
    res.render(personDetailsTemplatePath+'your-address');
  }
})

router.get('/personal-details/select-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'contact-details','check-personal'))
  res.render(personDetailsTemplatePath+'select-your-address')
})

router.get('/personal-details/select-your-address-list', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'contact-details','check-personal'))
  res.render(personDetailsTemplatePath+'select-your-address-list')
})

router.get('/personal-details/enter-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsPath+'contact-details','check-personal'))
  res.render(personDetailsTemplatePath+'enter-your-address')
})

router.get('/personal-details/contact-details', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/personal-details/check-personal','check-personal'))
  res.render(personDetailsTemplatePath+'contact-details')
})

router.get('/personal-details/check-personal', function (req, res) {
  res.render(personDetailsTemplatePath+'check-personal')
})

// Organisation details

const organisationDetailsPath = '/apply-for-a-blue-badge/organisation-details/';
const organisationDetailsTemplatePath = 'apply-for-a-blue-badge/prepare/organisation-details/';

router.get('/organisation-details/', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'charity','check-organisation'))
  res.redirect(organisationDetailsPath+'name')
})

router.get('/organisation-details/name', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'charity','check-organisation'))
  res.render(organisationDetailsTemplatePath+'name')
})

router.get('/organisation-details/charity', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'find-address','check-organisation'))
  res.render(organisationDetailsTemplatePath+'charity')
})

router.get('/organisation-details/find-address', function (req, res) {
  if (req.session.data['postcode-for-council'] !== '') {
    Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'contact-details','check-organisation'))
    res.render(personDetailsTemplatePath+'select-your-address-list')
  } else {
    Object.assign(res.locals,sendBackToCheckAnswers(req.query,personDetailsTemplatePath+'your-address','check-organisation'))
    if (req.query.change === 'true') {
      res.locals.formAction = 'select-address?change=true';
    } else {
      res.locals.formAction = 'select-address';
    }
    res.locals.submitLabel = 'Find address';
    res.render(personDetailsTemplatePath+'your-address');
  }
})

router.get('/organisation-details/select-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'contact-details','check-organisation'))
  res.render(personDetailsTemplatePath+'select-your-address')
})

router.get('/organisation-details/enter-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'contact-details','check-organisation'))
  res.render(personDetailsTemplatePath+'enter-your-address')
})

router.get('/organisation-details/contact-details', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'list-vehicles','check-organisation'))
  res.render(personDetailsTemplatePath+'contact-details')
})

router.get('/organisation-details/list-vehicles', function(req, res) {
  var vehicles = req.session.data['vehicle-array'];
  delete res.locals.tableRows;
  if (vehicles) {
    var tableRows = [];
    vehicles.forEach(function(item,index) {
    tableRows.push([
        {
          "text": item.vrn
        },
        {
          "text": item.frequency
        },
        {
          "html": "<a href='delete-vehicle/"+index+"'>Remove this</a>",
          "format": "numeric"
        }
      ])
    });
  }

  res.locals.tableRows = tableRows;
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'badges-needed-backend','check-organisation'))
  res.render(organisationDetailsTemplatePath+'list-vehicles');
});

router.get('/organisation-details/add-vehicle', function(req, res) {
  res.locals.formAction = 'create-vehicle';
  res.render(organisationDetailsTemplatePath+'add-vehicle');
});

router.get('/organisation-details/create-vehicle', function(req, res) {
  var vehicle = {
    "vrn": req.session.data['vehicle-vrn'],
    "frequency": req.session.data['vehicle-frequency'],
  }

  if (req.session.data['vehicle-array']) {
    req.session.data['vehicle-array'].push(vehicle);
  } else {
    req.session.data['vehicle-array'] = [vehicle];
  }

  delete req.session.data['vehicle-name','vehicle-frequency'];
  res.redirect('/apply-for-a-blue-badge/organisation-details/list-vehicles');
});

router.get('/organisation-details/delete-vehicle/:id', function(req, res) {
  req.session.data['vehicle-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/organisation-details/list-vehicles');
});

router.get('/organisation-details/badges-needed-backend', function(req, res) {
  if (req.session.data['vehicle-array'].length > 1) {
    console.log('yeah')
    res.redirect(organisationDetailsPath+'how-many-badges');
  } else {
    res.redirect(organisationDetailsPath+'check-organisation');
  }
});

router.get('/organisation-details/how-many-badges', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,organisationDetailsPath+'check-organisation','check-organisation'))
  res.render(organisationDetailsTemplatePath+'how-many-badges')
})

router.get('/organisation-details/check-organisation', function (req, res) {
  res.render(organisationDetailsTemplatePath+'check-organisation')
})

// Prove identity

router.get('/prove-your-identity', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/task-list';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render('apply-for-a-blue-badge/prepare/prove-your-identity')
})

router.get('/proof-not-needed', function (req, res) {
  res.render('apply-for-a-blue-badge/prepare/prove-eligibility/proof-not-needed');
})

// Prove eligibility

const proveEligibilityPath = '/apply-for-a-blue-badge/prove-eligibility/';
const proveEligibilityTemplatePath = 'apply-for-a-blue-badge/prepare/prove-eligibility/';

router.get('/prove-eligibility', function(req, res) {
  if (req.session.data['benefit'] !== 'none' && 
      req.session.data['disability'] !== 'blind' && 
      req.session.data['disability'] !== 'non-physical') {
  	res.redirect('/apply-for-a-blue-badge/prove-benefit');
  } else if (req.session.data['disability'] === 'blind') {
    res.redirect(proveEligibilityPath+'are-you-registered-blind');
  } else if (req.session.data['disability'] === 'non-physical') {
    res.redirect(proveEligibilityPath+'what-affects-journeys');
  } else {
    res.redirect(proveEligibilityPath+'describe-conditions');
  }
});

router.get('/prove-benefit', function(req, res) {
  if (req.session.data['benefit'] === 'armed-forces' || 
      req.session.data['benefit'] === 'war-pensioners' ||
      req.session.data['disability'] === 'terminal' || 
      req.session.data['pip-mandatory'] === 'yes') {
    res.redirect(proveEligibilityPath+'upload-benefit');
  } else {
    res.locals.formAction = proveEligibilityPath+'upload-benefit';
    res.locals.submitLabel = 'Continue';
    res.locals.change = req.query.change;
    req.session.data['benefit-proof-file-upload'] = undefined;
    req.session.data['benefit-proof-file'] = undefined;
    res.render(proveEligibilityTemplatePath+'prove-benefit');
  }
});

router.get('/prove-eligibility/upload-benefit', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/task-list';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render(proveEligibilityTemplatePath+'upload-benefit')
});

// DWP

router.get('/prove-eligibility/dwp-permission', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-permission-backend';
  res.render(proveEligibilityTemplatePath+'dwp-permission');
});

router.get('/prove-eligibility/dwp-permission-backend', function(req, res) {
  if (req.session.data['dwp-permission'] === 'yes') {
    res.redirect(proveEligibilityPath+'dwp-question-start');
  } else {
    res.redirect(proveEligibilityPath);
  }
});

router.get('/prove-eligibility/dwp-question-start', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-01';
  res.render(proveEligibilityTemplatePath+'dwp-question-start');
});

router.get('/prove-eligibility/dwp-question-01', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-02';
  res.render(proveEligibilityTemplatePath+'dwp-question-01');
});

router.get('/prove-eligibility/dwp-question-02', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-03';
  res.render(proveEligibilityTemplatePath+'dwp-question-02');
});

router.get('/prove-eligibility/dwp-question-03', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-04';
  res.render(proveEligibilityTemplatePath+'dwp-question-03');
});

router.get('/prove-eligibility/dwp-question-04', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-05';
  res.render(proveEligibilityTemplatePath+'dwp-question-04');
});

router.get('/prove-eligibility/dwp-question-05', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/dwp-question-end';
  res.render(proveEligibilityTemplatePath+'dwp-question-05');
});

router.get('/prove-eligibility/dwp-question-end', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?benefit-completed=true';
  res.render(proveEligibilityTemplatePath+'dwp-question-end');
});

// Registered blind (severely sight impaired)

router.get('/prove-eligibility/are-you-registered-blind', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/registered-blind-backend';
  res.render(proveEligibilityTemplatePath+'are-you-registered-blind');
});

router.get('/prove-eligibility/registered-blind-backend', function(req, res) {
  if (req.session.data['registered-blind'] === 'yes') {
    res.redirect(proveEligibilityPath+'blind-consent-la');
  } else {
    res.redirect(proveEligibilityPath+'upload-blind-cvi');
  }
});

router.get('/prove-eligibility/blind-consent-la', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/blind-consent-backend';
  res.render(proveEligibilityTemplatePath+'blind-consent-la');
});

router.get('/prove-eligibility/blind-consent-backend', function(req, res) {
  if (req.session.data['blind-consent'] === 'yes') {
    // res.redirect(proveEligibilityPath+'blind-select-council');
    res.redirect(proveEligibilityPath+'blind-is-your-council');
  } else {
    res.redirect(proveEligibilityPath+'upload-blind-cvi');
  }
});

router.get('/prove-eligibility/blind-is-your-council', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/blind-is-council-backend';
  res.render(proveEligibilityTemplatePath+'blind-is-your-council');
});

router.get('/prove-eligibility/blind-is-council-backend', function(req, res) {
  if (req.session.data['blind-is-council'] === 'yes') {
    res.redirect('/apply-for-a-blue-badge/task-list?blind-completed=true');
  } else {
    res.redirect(proveEligibilityPath+'blind-select-council');
    
  }
});

router.get('/prove-eligibility/blind-select-council', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?blind-completed=true';
  res.render(proveEligibilityTemplatePath+'blind-select-council');
});

router.get('/prove-eligibility/upload-blind-cvi', function (req, res) {
  res.locals.formAction = 'describe-conditions';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render(proveEligibilityTemplatePath+'upload-blind-cvi')
});

// Walking ability

router.get('/prove-eligibility/what-makes-walking-difficult', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/walking-difficult-backend','check-walking'))

  res.render(proveEligibilityTemplatePath+'what-makes-walking-difficult');
});

router.get('/prove-eligibility/walking-difficult-backend', function(req, res) {
  if (req.session.data['difficulty'].includes('breathlessness')) {
    res.redirect(proveEligibilityPath+'breathless-questions');
  } else {
    res.redirect(proveEligibilityPath+'list-mobility-aids');
  }
});

router.get('/prove-eligibility/breathless-questions', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/list-mobility-aids','check-walking'))

  res.render(proveEligibilityTemplatePath+'breathless-questions');
});

router.get('/prove-eligibility/list-mobility-aids', function(req, res) {
  var mobilityAids = req.session.data['mobility-aids-array'];
  delete res.locals.tableRows;
  if (mobilityAids) {
    var tableRows = [];
    var changeValue = req.query.change == 'true' ? '?change=true' : '';

    mobilityAids.forEach(function(aid,index) {
      tableRows.push(
        [
          {"text": aid.name},
          {"text": aid.usage},
          {"html": "<a href='delete-mobility-aid/"+index+changeValue+"'>Remove this</a>","format": "numeric"}
          ]
        )
    });
  }

  res.locals.tableRows = tableRows;
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/walking-time','check-walking'))
  res.render(proveEligibilityTemplatePath+'list-mobility-aids');
});

router.get('/prove-eligibility/add-mobility-aid', function(req, res) {
  var changeName = req.query.change == 'true' ? 'change' : '';
  var changeValue = req.query.change == 'true' ? 'true' : '';
  res.locals.formAction = 'create-mobility-aid';
  res.locals.shouldchangename = changeName;
  res.locals.shouldchangevalue = changeValue;
  res.render(proveEligibilityTemplatePath+'add-mobility-aid');
});

router.get('/prove-eligibility/create-mobility-aid', function(req, res) {
  var aidName = (req.session.data['mobility-aid-type'] === 'walking-aid') ? 
                req.session.data['mobility-aid-name'] : req.session.data['mobility-aid-type'];

  var mobilityAid = {
    "name": aidName,
    "usage": req.session.data['mobility-aid-usage'],
    "source": req.session.data['mobility-aid-source']
  }

  if (req.session.data['mobility-aids-array']) {
    req.session.data['mobility-aids-array'].push(mobilityAid);
  } else {
    req.session.data['mobility-aids-array'] = [mobilityAid];
  }

  var changeValue = req.query.change == 'true' ? '?change=true' : '';

  delete req.session.data['mobility-aid-type','mobility-aid-name','mobility-aid-usage','mobility-aid-source'];
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-mobility-aids' + changeValue);
});

router.get('/prove-eligibility/delete-mobility-aid/:id', function(req, res) {
  var changeValue = req.query.change == 'true' ? '?change=true' : '';

  req.session.data['mobility-aids-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-mobility-aids'+changeValue);
});


router.get('/prove-eligibility/walking-time', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/walking-time-backend','check-walking'))
  res.render(proveEligibilityTemplatePath+'walking-time');
});

router.get('/prove-eligibility/walking-time-backend', function(req, res) {
  if (req.session.data['how-long-walk'] === 'cant-walk') {
    res.redirect(proveEligibilityPath+'check-walking');
  } else {
    res.redirect(proveEligibilityPath+'where-can-you-walk');
  }
});

router.get('/prove-eligibility/where-can-you-walk', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/check-walking','check-walking'))
  res.render(proveEligibilityTemplatePath+'where-can-you-walk');
});

router.get('/prove-eligibility/how-quickly-do-you-walk', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/check-walking','check-walking'))
  res.render(proveEligibilityTemplatePath+'how-quickly-do-you-walk');
});

// Both arms

router.get('/prove-eligibility/how-often-drive', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/drive-adapted-vehicle';
  res.render(proveEligibilityTemplatePath+'how-often-drive');
});

router.get('/prove-eligibility/drive-adapted-vehicle', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/drive-adapted-backend';
  res.render(proveEligibilityTemplatePath+'drive-adapted-vehicle');
});

router.get('/prove-eligibility/drive-adapted-backend', function(req, res) {
  if (req.session.data['drive-adapted-vehicle'] == 'yes') {
    res.redirect(proveEligibilityPath+'upload-adapted-evidence');
  } else {
    res.redirect(proveEligibilityPath+'difficulty-parking-meters');
  }
});

router.get('/prove-eligibility/difficulty-parking-meters', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/check-arms-blind';
  res.render(proveEligibilityTemplatePath+'difficulty-parking-meters');
});


router.get('/prove-eligibility/upload-adapted-evidence', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/difficulty-parking-meters';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render(proveEligibilityTemplatePath+'upload-adapted-evidence')
});

// Under 3

router.get('/prove-eligibility/medical-equipment', function(req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/check-child','check-child'))
  res.render(proveEligibilityTemplatePath+'medical-equipment');
});


// Describe condition

router.get('/prove-eligibility/describe-conditions', function(req, res) {
  var thisFormAction = '',
      thisCheckPage = '';

  if (req.session.data['disability'] == 'problems-walking') {
    thisFormAction = '/apply-for-a-blue-badge/prove-eligibility/what-makes-walking-difficult';
    thisCheckPage = '/apply-for-a-blue-badge/prove-eligibility/check-walking';
  } else if (req.session.data['disability'] == 'terminal') {
    thisFormAction = '/apply-for-a-blue-badge/task-list?terminal-completed=true';
    thisCheckPage = '/apply-for-a-blue-badge/task-list?terminal-completed=true';
  } else if (req.session.data['disability'] == 'child-bulky-equipment') {
    thisFormAction = '/apply-for-a-blue-badge/prove-eligibility/medical-equipment';
    thisCheckPage = '/apply-for-a-blue-badge/prove-eligibility/check-child';
  } else if (req.session.data['disability'] == 'child-close-to-vehicle') {
    thisFormAction = '/apply-for-a-blue-badge/prove-eligibility/check-child';
    thisCheckPage = '/apply-for-a-blue-badge/prove-eligibility/check-child';
  } else {
    thisFormAction = '/apply-for-a-blue-badge/prove-eligibility/how-often-drive';
    thisCheckPage = '/apply-for-a-blue-badge/prove-eligibility/check-arms-blind';
  }

  Object.assign(res.locals,sendBackToCheckAnswers(req.query,thisFormAction,thisCheckPage))
  
  res.render(proveEligibilityTemplatePath+'describe-conditions');
});

router.get('/prove-eligibility/what-affects-journeys', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/need-a-badge';
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/need-a-badge','check-non-physical'))
  res.render(proveEligibilityTemplatePath+'what-affects-journeys');
});

router.get('/prove-eligibility/need-a-badge', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/coping-strategies';
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/coping-strategies','check-non-physical'))
  res.render(proveEligibilityTemplatePath+'need-a-badge');
});

router.get('/prove-eligibility/coping-strategies', function(req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/prove-eligibility/check-non-physical';
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/apply-for-a-blue-badge/prove-eligibility/check-non-physical','check-non-physical'))
  res.render(proveEligibilityTemplatePath+'coping-strategies');
});

router.get('/prove-eligibility/check-walking', function(req, res) {
  res.render(proveEligibilityTemplatePath+'check-walking');
});

router.get('/prove-eligibility/check-non-physical', function(req, res) {
  res.locals.affectsJourneysArray = JSON.parse(req.session.data['affects-journeys-array']);

  res.render(proveEligibilityTemplatePath+'check-non-physical');
});

router.get('/prove-eligibility/check-arms-blind', function(req, res) {
  res.render(proveEligibilityTemplatePath+'check-arms-blind');
});

router.get('/prove-eligibility/check-child', function(req, res) {
  res.render(proveEligibilityTemplatePath+'check-child');
});


router.get('/upload-medical-evidence', function (req, res) {
  res.locals.formAction = 'task-list?medical-evidence-completed=true';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render(proveEligibilityTemplatePath+'upload-medical-evidence')
});


// List treatments

router.get('/prove-eligibility/list-treatments', function(req, res) {
  var treatments = req.session.data['treatments-array'];
  delete res.locals.tableRows;
  if (treatments) {
    var tableRows = [];
    treatments.forEach(function(treatment,index) {
      tableRows.push([
        {
          "text": treatment.description
        },
        {
          "text": treatment.date
        },
        {
          "html": "<a href='delete-treatment/"+index+"'>Remove this</a>",
          "format": "numeric"
        }
      ])
    });
  }

  res.locals.tableRows = tableRows;
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?treatments-completed=true';
  res.render(proveEligibilityTemplatePath+'list-treatments');
});

router.get('/prove-eligibility/add-treatment', function(req, res) {
  res.locals.formAction = 'create-treatment';
  res.render(proveEligibilityTemplatePath+'add-treatment');
});

router.get('/prove-eligibility/create-treatment', function(req, res) {
  var treatmentdate = "";

  if(req.session.data['treatment-when'] === "past") {
    treatmentdate = req.session.data['past-date'];
  } else if(req.session.data['treatment-when'] === "ongoing") {
    treatmentdate = req.session.data['present-date'];
  } else if(req.session.data['treatment-when'] === "future") {
    treatmentdate = req.session.data['future-date'] + " (Due to improve: " +  req.session.data['future-improve'] + ")";
  }

  var treatment = {
    "description": req.session.data['treatment-description'],
    "date": treatmentdate
  }

  if (req.session.data['treatments-array']) {
    req.session.data['treatments-array'].push(treatment);
  } else {
    req.session.data['treatments-array'] = [treatment];
  }

  delete req.session.data['treatment-description', 'past-date', 'present-date', 'future-date', 'future-improve'];
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-treatments');
});

router.get('/prove-eligibility/delete-treatment/:id', function(req, res) {
  req.session.data['treatments-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-treatments');
});

// List medication

router.get('/prove-eligibility/list-medication', function(req, res) {
  var medication = req.session.data['medication-array'];
  delete res.locals.tableRows;
  if (medication) {
    var tableRows = [];
    medication.forEach(function(item,index) {
    tableRows.push([
        {
          "text": item.name
        },
        {
          "text": item.type
        },
        {
          "text": item.dosage
        },
        {
          "html": "<a href='delete-medication/"+index+"'>Remove this</a>",
          "format": "numeric"
        }
      ])
    });
  }

  res.locals.tableRows = tableRows;
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?medication-completed=true';
  res.render(proveEligibilityTemplatePath+'list-medication');
});

router.get('/prove-eligibility/add-medication', function(req, res) {
  res.locals.formAction = 'create-medication';
  res.render(proveEligibilityTemplatePath+'add-medication');
});

router.get('/prove-eligibility/create-medication', function(req, res) {
  var medication = {
    "name": req.session.data['medication-name'],
    "type": req.session.data['medication-type'],
    "regularity": req.session.data['medication-regularity'],
    "dosage": req.session.data['medication-dosage']
  }

  if (req.session.data['medication-array']) {
    req.session.data['medication-array'].push(medication);
  } else {
    req.session.data['medication-array'] = [medication];
  }

  delete req.session.data['medication-name','medication-type','medication-regularity','medication-dosage'];
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-medication');
});

router.get('/prove-eligibility/delete-medication/:id', function(req, res) {
  req.session.data['medication-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-medication');
});


// List healthcare professionals

router.get('/prove-eligibility/list-healthcare-professionals', function(req, res) {
  var hcps = req.session.data['hcp-array'];
  delete res.locals.tableRows;

  if (hcps) {
    var tableRows = [];
    hcps.forEach(function(item,index) {
    tableRows.push([
        {
          "text": item.name
        },
        {
          "text": item.hospital
        },
        {
          "html": "<a href='delete-hcp/"+index+"'>Remove this</a>",
          "format": "numeric"
        }
      ])
    });
  }

  res.locals.tableRows = tableRows;
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?hcp-completed=true'
  res.render(proveEligibilityTemplatePath+'list-healthcare-professionals');
});

router.get('/prove-eligibility/add-healthcare-professional', function(req, res) {
  res.locals.formAction = 'create-hcp';
  res.render(proveEligibilityTemplatePath+'add-healthcare-professional');
});

router.get('/prove-eligibility/create-hcp', function(req, res) {
  var hcp = {
    "name": req.session.data['hcp-name'],
    "hospital": req.session.data['hcp-hospital']
  }

  if (req.session.data['hcp-array']) {
    req.session.data['hcp-array'].push(hcp);
  } else {
    req.session.data['hcp-array'] = [hcp];
  }

  delete req.session.data['hcp-name','hcp-hospital'];
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-healthcare-professionals');
});

router.get('/prove-eligibility/delete-hcp/:id', function(req, res) {
  req.session.data['hcp-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-healthcare-professionals');
});

// List associated professionals

router.get('/prove-eligibility/list-associated-professionals', function(req, res) {
  var hcps = req.session.data['assp-array'];
  delete res.locals.tableRows;

  if (hcps) {
    var tableRows = [];
    hcps.forEach(function(item,index) {
    tableRows.push([
        {
          "text": item.name
        },
        {
          "text": item.placeofwork
        },
        {
          "html": "<a href='delete-assp/"+index+"'>Remove this</a>",
          "format": "numeric"
        }
      ])
    });
  }

  res.locals.tableRows = tableRows;
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?assp-completed=true'
  res.render(proveEligibilityTemplatePath+'list-associated-professionals');
});

router.get('/prove-eligibility/add-associated-professional', function(req, res) {
  res.locals.formAction = 'create-assp';
  res.render(proveEligibilityTemplatePath+'add-associated-professional');
});

router.get('/prove-eligibility/create-assp', function(req, res) {
  var assp = {
    "name": req.session.data['assp-name'],
    "placeofwork": req.session.data['assp-placeofwork']
  }

  if (req.session.data['assp-array']) {
    req.session.data['assp-array'].push(assp);
  } else {
    req.session.data['assp-array'] = [assp];
  }

  delete req.session.data['assp-name','assp-placeofwork'];
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-associated-professionals');
});

router.get('/prove-eligibility/delete-assp/:id', function(req, res) {
  req.session.data['assp-array'].splice(req.params.id, 1);
  res.redirect('/apply-for-a-blue-badge/prove-eligibility/list-associated-professionals');
});

// Prove address

router.get('/prove-your-address', function (req, res) {
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.locals.formAction = '/apply-for-a-blue-badge/task-list';
  res.render('apply-for-a-blue-badge/prepare/prove-your-address');
})

// Add photo

router.get('/provide-photo', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/provide-photo-backend';
  res.locals.submitLabel = 'Continue';
  res.locals.change = req.query.change;
  res.render('apply-for-a-blue-badge/prepare/provide-photo');
})

router.get('/provide-photo-backend', function(req, res) {
  if (req.session.data['already-have-photo'] == 'yes') {
    res.redirect('/apply-for-a-blue-badge/task-list?photo-completed=true');
  } else {
    res.redirect('/apply-for-a-blue-badge/take-your-photo');
  }
});

router.get('/device-take-photo', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/task-list?photo-completed=true';
  res.locals.submitLabel = 'Continue';
  res.render('apply-for-a-blue-badge/prepare/device-take-photo');
});

router.get('/take-your-photo', function (req, res) {
  res.locals.formAction = '/apply-for-a-blue-badge/take-photo-backend';
  res.locals.submitLabel = 'Continue';
  res.render('apply-for-a-blue-badge/prepare/take-your-photo');
});

router.get('/take-photo-backend', function(req, res) {
  if (req.session.data['devices-camera'] == 'yes') {
    res.redirect('/apply-for-a-blue-badge/device-take-photo');
  } else {
    res.redirect('/apply-for-a-blue-badge/task-list?photo-completed=true');
  }
});

router.get('/check-answers', function (req, res) {
  res.render('apply-for-a-blue-badge/prepare/check-answers'); //, {'formAction':'/apply-for-a-blue-badge/prepare/paying-for-your-blue-badge'})
})

/* 
  ---------------------------------------------------------------
  Guidance
  --------------------------------------------------------------- 
*/

router.get('/guidance', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/find-camera');
})

router.get('/get-document', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/get-document');
})


router.get('/before-take-photo', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/before-take-photo');
})

router.get('/taking-the-photo', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/taking-the-photo');
})

router.get('/transfer-the-image', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/transfer-the-image');
})


router.get('/photo-findcamera', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/photo-findcamera');
})

router.get('/photo-background', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/photo-background');
})

router.get('/photo-lighting', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/photo-lighting');
})

router.get('/photo-position', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/photo-position');
})

router.get('/photo-takephoto', function (req, res) {
  res.render('apply-for-a-blue-badge/guidance/photo-takephoto');
})

/* 
  ---------------------------------------------------------------
  Apply
  --------------------------------------------------------------- 
*/

router.get('/declaration', function (req, res) {
  res.render('apply-for-a-blue-badge/apply/declaration');
})

router.get('/paying-for-your-blue-badge', function(req, res) {
  res.render('apply-for-a-blue-badge/apply/paying-for-your-blue-badge');
});

router.get('/submit-wales', function(req, res) {
  res.render('apply-for-a-blue-badge/apply/submit-wales');
});

router.get('/paying-for-your-blue-badge-backend', function(req, res) {
  if (req.query['pay-when'] === 'later') {
    res.redirect('/apply-for-a-blue-badge/apply/confirmation');
  } else {
    req.session.data['pay-when'] = 'now';
    res.redirect('https://products.payments.service.gov.uk/pay/6082e5de8f0542ed8ae20ef9b9feaeac');
  };
});

router.get('/payment-failed-backend', function(req, res) {
  if (req.query['payment-retry'] === 'yes') {
    req.session.data['pay-when'] = 'now';
    res.redirect('https://products.payments.service.gov.uk/pay/6082e5de8f0542ed8ae20ef9b9feaeac');
  } else {
    req.session.data['pay-when'] = 'later';
    res.redirect('/apply-for-a-blue-badge/apply/confirmation');
  };
});

router.get('/confirmation', function (req, res) {
  res.render('apply-for-a-blue-badge/apply/confirmation')
})

router.get('/version-history', function(req, res) {
  res.render('version-history');
});

module.exports = router
