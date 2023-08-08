const typesProvider = require("../provider/typeProvider");
const dataValidator = require("../helper/Validation/dataValidator");

let addType = async (req, res) => {
  try {
    let typeDoc = await dataValidator.validateTypeObj(req.body);
    const response = await typesProvider.addType(typeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getAdminTypes = async (req, res) => {
  try {
    const response = await typesProvider.getAllAdminTypes();
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getVendorTypes = async (req, res) => {
  try {
    const response = await typesProvider.getAllVendorTypes();
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
const updateType = async (req, res) => {
  try {
    let typeDoc = await dataValidator.validateTypeUpdateObj(req.body);
    const response = await typesProvider.typeUpdation(typeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

module.exports = {
  addType,
  getAdminTypes,
  getVendorTypes,
  updateType,
};
