var express = require("express");
var router = express.Router();
const storeController = require("../controller/storeController");
const jwt = require("../utils/authMiddleware");

router.post("/vendor/add", jwt.verifyJWT, storeController.addStore);
router.post("/vendor/verifyStore", jwt.verifyJWT, storeController.verifyStore);
router.put("/vendor/update", jwt.verifyJWT, storeController.updateStore);
router.get("/vendor/allStores", jwt.verifyJWT, storeController.getAllStore);

module.exports = router;
