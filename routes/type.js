var express = require("express");
var router = express.Router();
const typeController = require("../controller/typeController");
const jwt = require("../utils/authMiddleware");

//Admin
router.post("/admin/add", jwt.verifyJWT, typeController.addType);
router.get("/admin/allTypes", jwt.verifyJWT, typeController.getAdminTypes);

router.put("/admin/update", jwt.verifyJWT, typeController.updateType);
//Vendor
router.get("/vendor/allTypes", jwt.verifyJWT, typeController.getVendorTypes);

module.exports = router;
