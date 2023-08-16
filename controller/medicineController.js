const medicineProvider = require("../provider/medicineProvider");
const dataValidator = require("../helper/Validation/dataValidator");

let addMedicine = async (req, res) => {
  try {
    let medicineDoc = await dataValidator.validateMedicineObj(req.body);
    const response = await medicineProvider.addMedicine(medicineDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
const updateMedicine = async (req, res) => {
  try {
    let medicineDoc = await dataValidator.validateUpdateMedicineObj(req.body);
    const response = await medicineProvider.medicineUpdation(medicineDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const medicinesByStore = async (req, res) => {
  try {
    let medicineDoc = await dataValidator.validateGetMedicineByStoreObj(req.body);
    const response = await medicineProvider.getMedicineByStore(medicineDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const medicinesByCategory = async (req, res) => {
  try {
    let medicineDoc = await dataValidator.validateGetMedicineByCategoryObj(
      req.body
    );
    const response = await medicineProvider.getMedicineByCategory(medicineDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const medicinesByType = async (req, res) => {
  try {
    let medicineDoc = await dataValidator.validateGetMedicineByTypeObj(
      req.body
    );
    const response = await medicineProvider.getMedicineByType(medicineDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
// const getAdminCategories = async (req, res) => {
//   try {
//     const response = await categoriesProvider.getAllAdminCategories();
//     return _handleResponse(req, res, null, response);
//   } catch (e) {
//     return _handleResponse(req, res, e);
//   }
// };

// const getVendorCategories = async (req, res) => {
//   try {
//     const response = await categoriesProvider.getAllVendorCategories();
//     return _handleResponse(req, res, null, response);
//   } catch (e) {
//     return _handleResponse(req, res, e);
//   }
// };


module.exports = {
  addMedicine,
  updateMedicine,
  medicinesByStore,
  medicinesByCategory,
  medicinesByType,
  //   getAdminCategories,
  //   updateCategory,
  //   getVendorCategories,
};
