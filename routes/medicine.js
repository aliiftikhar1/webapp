var express = require("express");
var router = express.Router();
const medicineController = require("../controller/medicineController");
const jwt = require("../utils/authMiddleware");

//Vendor
router.post("/vendor/add", jwt.verifyJWT, medicineController.addMedicine);
router.put("/vendor/update", jwt.verifyJWT, medicineController.updateMedicine);
router.post(
  "/vendor/store/medicines",
  jwt.verifyJWT,
  medicineController.medicinesByStore
);

router.post(
  "/vendor/category/medicines",
  jwt.verifyJWT,
  medicineController.medicinesByCategory
);
router.post(
  "/vendor/type/medicines",
  jwt.verifyJWT,
  medicineController.medicinesByType
);
//Admin
router.post("/vendor/add", jwt.verifyJWT, medicineController.addMedicine);
router.put("/vendor/update", jwt.verifyJWT, medicineController.updateMedicine);




// router.get(
//   "/admin/allCategories",
//   jwt.verifyJWT,
//   categoriesController.getAdminCategories
// );


// //Vendor
// router.get(
//   "/vendor/allCategories",
//   jwt.verifyJWT,
//   categoriesController.getVendorCategories
// );

module.exports = router;
