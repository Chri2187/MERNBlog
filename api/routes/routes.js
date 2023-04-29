const express = require('express')
const router = express.Router()
const { register, login, profile } = require('../controller/auth')
// Add routes
// register
router.route('/register').post(register)
// login
router.route('/login').post(login)
// profile
router.route('/profile').get(profile)
module.exports = router;
