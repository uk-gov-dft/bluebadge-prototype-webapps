const express = require('express')
const router = express.Router()

router.use(function(req, res, next) {
  var applicant = req.session.data['applicant'];
  res.locals.serviceName = 'Replace a Blue Badge';
  res.locals.homepageUrl = "/replace-a-blue-badge/";
  res.locals.serviceUrl = "/replace-a-blue-badge/";
  res.locals.my = applicant === 'someone-else' ? 'their' : 'my';
  res.locals.you = applicant === 'someone-else' ? 'they' : 'you';
  res.locals.your = applicant === 'someone-else' ? 'their' : 'your';
  res.locals.youOrThem = applicant === 'someone-else' ? 'them' : 'you';

  if (!req.session.data['council-name']) {
    res.locals.data['council-name'] = 'your local council';
  } 

  var application = "application";
  switch(req.session.data['renewal-or-new-application']) {
    case "new":
      application = "application";
      break;
    case "renewal":
      application = "renewal application";
      break;
    default:
      application = "application";
      break;
  }
  res.locals.application = application;
  next();
});

function sendBackToCheckAnswers(query, nextAction, checkSection) {
  var locals;
  if (query.change === 'true') {
    console.log('true');
    locals = {
      'formAction': checkSection,
      'submitLabel': 'Update',
      'pagechange': '?change=true'
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


router.get('/', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/who-does-the-badge-belong-to','check-answers'));
  res.render('replace-a-blue-badge/index.html')
});

router.get('/who-does-the-badge-belong-to', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/choose-your-council','check-answers'));
  res.render('replace-a-blue-badge/who');
})

router.get('/choose-your-council', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/what-happened','check-answers'));
  res.render('replace-a-blue-badge/choose-your-council');
})


// router.get('/badge-number', function (req, res) {
//   Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/what-happened','check-answers'));
//   res.render('replace-a-blue-badge/badge-number');
// })

router.get('/what-happened', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/name','check-answers'));
  res.render('replace-a-blue-badge/what-happened');
})

router.get('/name', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/dob','check-answers'));
  res.render('replace-a-blue-badge/name');
})

router.get('/dob', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/nino','check-answers'));
  res.render('replace-a-blue-badge/dob');
})

router.get('/nino', function (req, res) {
  var dobYear = req.session.data['dob-year'],
      dobMonth = req.session.data['dob-month'],
      dobDay = req.session.data['dob-day'];

  var theirAge = getAge("" + dobYear + '/' + dobMonth + '/' + dobDay + "");

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

  res.locals.data['real-age'] = theirAge;

  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/your-address','check-answers'));

  if(theirAge >= 16) {
    res.render('replace-a-blue-badge/nino')
  } else {
    res.redirect('your-address?real-age='+theirAge);
  }
  
})

router.get('/your-address', function (req, res) { 
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/select-address','check-answers'));
  res.render('replace-a-blue-badge/your-address');
})

router.get('/select-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/contact-details','check-answers'));
  res.render('replace-a-blue-badge/select-your-address');
})

router.get('/enter-address', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/contact-details','check-answers'));
  res.render('replace-a-blue-badge/enter-your-address');
})

router.get('/contact-details', function (req, res) {
  Object.assign(res.locals,sendBackToCheckAnswers(req.query,'/replace-a-blue-badge/check-answers','check-answers'));
  res.render('replace-a-blue-badge/contact-details');
})

router.get('/check-answers', function (req, res) {
  res.locals.formAction = '/replace-a-blue-badge/declaration';
  res.render('replace-a-blue-badge/check-answers');
})

router.get('/declaration', function (req, res) {
  res.locals.formAction = '/replace-a-blue-badge/pay';
  res.render('replace-a-blue-badge/declaration');
})

router.get('/pay', function (req, res) {
  res.locals.formAction = '/replace-a-blue-badge/confirmation';
  res.render('replace-a-blue-badge/paying-for-your-blue-badge');
})

router.get('/confirmation', function (req, res) {
  res.render('replace-a-blue-badge/confirmation');
})

module.exports = router
