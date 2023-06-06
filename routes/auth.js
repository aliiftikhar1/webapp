var express = require('express');
var router = express.Router();
const authController = require('../controller/authController');
const jwt = require('../utils/authMiddleware');


 router.post('/register', authController.userRegister);
 router.get('/verifyEmail', authController.verifyEmail);
 router.post('/login', authController.login);
 router.get('/forgetPassword', authController.forgetPassword);
 router.get('/logout',jwt.verifyJWT, authController.logout);

module.exports = router;
