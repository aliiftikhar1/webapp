var express = require('express');
var router = express.Router();
const dashboardController = require('../controller/dashboardController');
const jwt = require("../utils/authMiddleware");



router.get('/users/vendor', jwt.verifyJWT, dashboardController.getVendors);
router.get('/users/admin', jwt.verifyJWT, dashboardController.getAdmins);
router.get('/users/user', jwt.verifyJWT, dashboardController.getUsers);



module.exports = router;