var express = require("express");
var router = express.Router();
const storeController = require("../controller/storeController");
const jwt = require("../utils/authMiddleware");


//vendor
router.post("/vendor/add", jwt.verifyJWT, storeController.addStore);
router.put("/vendor/update", jwt.verifyJWT, storeController.updateStore);
router.post(
  "/vendor/allStores",
  jwt.verifyJWT,
  storeController.getAllVendorStore
);




//admin
router.get("/admin/allStore", jwt.verifyJWT, storeController.getAllStore);
router.put("/admin/verifyStore", jwt.verifyJWT, storeController.verifyStore);

module.exports = router;
