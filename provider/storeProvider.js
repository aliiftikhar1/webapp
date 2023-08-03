const sendEmail = require("../helper/emailHelper");
const authMiddleware = require("../utils/authMiddleware");
const message = require("../config/messages");
const { DbHelper } = require("../helper/DB/dbHelper");
const { DbHelperStore } = require("../helper/DB/dhHelperStore");
const { DbHelperUser } = require("../helper/DB/dbHelperUser");
const { COLLECTIONS, PROJECT_NAME } = require("../config/constant");

//create instance of
const dbInstance = new DbHelper();
const dbInstanceUser = new DbHelperUser();
const dbInstanceStore = new DbHelperStore();

const addStore = async (storeDoc) => {
  try {
    let vendorExists = await dbInstanceUser.getUserById(storeDoc.vendorId);
    if (vendorExists == null) {
      throw message.error.INVALID_VENDOR_ID;
    }
    let storeExists = await dbInstanceStore.getStoreByName(storeDoc.storeName);
    if (storeExists) {
      throw message.error.STORE_WITH_NAME_ALREADY_EXIST;
    }
    let createdStore = await dbInstance.insertDocument(
      COLLECTIONS.STORE_COLLECTION_NAME,
      storeDoc
    );
    console.log("storeProvider -> addStore ::: New Store created");
    return createdStore;
  } catch (e) {
    throw Error(e);
  }
};
const storeVerification = async (storeDoc) => {
  try {
    //check if user exist with same email
    let store = await dbInstanceStore.getStoreById(storeDoc.storeID);
    if (store.active == true) {
      throw message.error.STORE_ALREADY_VERIFIED;
    }
    let updatedStore = await dbInstance.updateDocument(
      COLLECTIONS.STORE_COLLECTION_NAME,
      store._id,
      {
        active: true,
      }
    );
    console.log("storeProvider -> storeVerification ::: Store Verified");
    return updatedStore;
  } catch (e) {
    throw Error(e);
  }
};

const storeUpdation = async (storeDoc) => {
  try {
    let store = await dbInstanceStore.getStoreById(storeDoc.storeID);
    let updatedStore = await dbInstance.updateDocument(
      COLLECTIONS.STORE_COLLECTION_NAME,
      store._id,
      {
        storeName: storeDoc.storeName,
        cityName: storeDoc.cityName,
        address: storeDoc.address,
        phoneNo: storeDoc.phoneNo,
        updatedDate: Date.now,
      }
    );
    console.log("storeProvider -> storeUpdation ::: Store Updated");

    return updatedStore;
  } catch (e) {
    throw Error(e);
  }
};


const getAllStores = async (storeDoc) => {
  try {
    let stores = await dbInstanceStore.getStoresByVendorId(storeDoc.vendorId);
    console.log("storeProvider -> getAllStores ::: Stores");

    return stores;
  } catch (e) {
    throw Error(e);
  }
};
module.exports = {
  addStore,
  storeVerification,
  storeUpdation,
  getAllStores,
};
