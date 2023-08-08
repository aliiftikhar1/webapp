const categoriesProvider = require("../provider/categoryProvider");
const dataValidator = require("../helper/Validation/dataValidator");

let addCategory = async (req, res) => {
  try {
    let categoryDoc = await dataValidator.validateCategoryObj(req.body);
    const response = await categoriesProvider.addCategory(categoryDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getAdminCategories = async (req, res) => {
  try {
    const response = await categoriesProvider.getAllAdminCategories();
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getVendorCategories = async (req, res) => {
  try {
    const response = await categoriesProvider.getAllVendorCategories();
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
const updateCategory = async (req, res) => {
  try {
    let categoryDoc = await dataValidator.validateCategoryUpdateObj(req.body);
    const response = await categoriesProvider.categoryUpdation(categoryDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

module.exports = {
  addCategory,
  getAdminCategories,
  updateCategory,
  getVendorCategories,
};
