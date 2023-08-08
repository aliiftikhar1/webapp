const message = require("../config/messages");
const { DbHelper } = require("../helper/DB/dbHelper");
const { DbHelperType } = require("../helper/DB/dhHelperType");
const { COLLECTIONS } = require("../config/constant");
const crypto = require("crypto");

//create instance of
const dbInstance = new DbHelper();
const dbInstanceType = new DbHelperType();

const addType = async (typeDoc) => {
  let parentCode = "TP";
  console.log(typeDoc.typeName);
  try {
    let typeExists = await dbInstanceType.getTypeByName(typeDoc.typeName);

    if (typeExists) {
      throw message.error.TYPE_ALREADY_EXIST;
    }
    let code = crypto.randomInt(0, 100);
    parentCode = parentCode + code;
    typeDoc.typeCode = parentCode;

    let createdType = await dbInstance.insertDocument(
      COLLECTIONS.TYPE_COLLECTION_NAME,
      typeDoc
    );
    console.log("typeProvider -> addType ::: New type created");
    return createdType;
  } catch (e) {
    throw Error(e);
  }
};

const typeUpdation = async (typeDoc) => {
  try {
    let type = await dbInstanceType.getTypeById(typeDoc.typeId);
    let typeCategory = await dbInstance.updateDocument(
      COLLECTIONS.TYPE_COLLECTION_NAME,
      type._id,
      {
        typeName: typeDoc.typeName,
      }
    );
    console.log("typeProvider -> typeUpdation ::: type Updated");

    return typeCategory;
  } catch (e) {
    throw Error(e);
  }
};
const getAllVendorTypes = async () => {
  try {
       let types = await dbInstanceType.getTypes();
    console.log("typeProvider -> getAllAdminTypes ::: types");

    return types;
  } catch (e) {
    throw Error(e);
  }
};
const getAllAdminTypes = async () => {
  try {
    let types = await dbInstanceType.getTypes();
    console.log("typeProvider -> getAllAdminTypes ::: types");

    return types;
  } catch (e) {
    throw Error(e);
  }
};

module.exports = {
  addType,
  getAllVendorTypes,
  getAllAdminTypes,
  typeUpdation,
};
