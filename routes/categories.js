var express = require("express");
var router = express.Router();
const categoriesController = require("../controller/categoryController");
const jwt = require("../utils/authMiddleware");

//Admin
router.post("/admin/add", jwt.verifyJWT, categoriesController.addCategory);
router.get(
  "/admin/allCategories",
  jwt.verifyJWT,
  categoriesController.getAdminCategories
);

router.put("/admin/update", jwt.verifyJWT, categoriesController.updateCategory);
//Vendor
router.get(
  "/vendor/allCategories",
  jwt.verifyJWT,
  categoriesController.getVendorCategories
);


module.exports = router;
