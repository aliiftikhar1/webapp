var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');


 router.post('/register', authController.userRegister);
 router.post('/verifyEmail', authController.verifyEmail);
 router.post('/login', authController.login);
 router.post('/forgetPassword', authController.forgetPassword);

module.exports = router;
