const storeProvider = require("../provider/storeProvider");
const dataValidator = require("../helper/Validation/dataValidator");

let addStore = async (req, res) => {
  try {
    let storeDoc = await dataValidator.validateStoreObj(req.body);
    const response = await storeProvider.addStore(storeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
const verifyStore = async (req, res) => {
  try {
    let storeDoc = await dataValidator.validateStoreVerificationObj(req.body);
    const response = await storeProvider.storeVerification(storeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getAllStore = async (req, res) => {
  try {
    const response = await storeProvider.getAllStores();
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
const updateStore = async (req, res) => {
  try {
    let storeDoc = await dataValidator.validateUpdateStoreObj(req.body);
    const response = await storeProvider.storeUpdation(storeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};

const getAllVendorStore = async (req, res) => {
  try {
    let storeDoc = await dataValidator.validateAllStoreObj(req.body);
    const response = await storeProvider.getAllVendorsStores(storeDoc);
    return _handleResponse(req, res, null, response);
  } catch (e) {
    return _handleResponse(req, res, e);
  }
};
module.exports = {
  addStore,
  verifyStore,
  updateStore,
  getAllStore,
  getAllVendorStore,
};
