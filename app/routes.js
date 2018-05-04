const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Admin routes

router.get('/admin/sign-in', function (req, res) {
  res.render('admin/sign-in', {})
  req.session.destroy()
})

router.get('/admin/all-applications', function (req, res) {
  res.render('admin/all-applications', {'title':'All applications','app_class':'active'})
})

router.get('/admin/manage-users', function (req, res) {
  res.render('admin/manage-users', {'title':'Manage users','manage_class':'active'})
})

router.get('/admin/create-user', function (req, res) {
  res.render('admin/create-user', {'title':'Create a new user','manage_class':'active'})
})

router.get('/admin/edit-details', function (req, res) {
  res.render('admin/edit-details', {'title':'User details','manage_class':'active'})
})

router.get('/admin/remove-user', function (req, res) {
  res.render('admin/remove-user', {'title':'Remove user','manage_class':'active'})
})

// Candidate routes

router.get('/candidate', function (req, res) {
  res.locals.hideServiceName = 'yes';
  res.render('candidate/index.html')
})

router.get('/candidate/check-eligibility/', function (req, res) {
  res.render('candidate/check-eligibility/index.html', {'title':'Who are you applying for?'})
})

module.exports = router
