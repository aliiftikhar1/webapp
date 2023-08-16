const message = require("../config/messages");
const { DbHelper } = require("../helper/DB/dbHelper");
const { DbHelperCategory } = require("../helper/DB/dhHelperCategory");
const { COLLECTIONS } = require("../config/constant");
const crypto = require("crypto");
const { DbHelperMedicine } = require("../helper/DB/dbHelperMedicine");

//create instance of
const dbInstance = new DbHelper();
const dbInstanceMedicine = new DbHelperMedicine();

const addMedicine = async (medicineDoc) => {
  try {
    let medicineExists =
      await dbInstanceMedicine.getMedicineByNameCompanyCategoryTypeStore(
        medicineDoc.medicineName,
        medicineDoc.companyName,
        medicineDoc.storeId,
        medicineDoc.categoryID,
        medicineDoc.typeID
      );

    if (medicineExists) {
      throw message.error.MEDICINE_ALREADY_EXIST;
    }

    let createdMedicine = await dbInstance.insertDocument(
      COLLECTIONS.MEDICINE_COLLECTION_NAME,
      medicineDoc
    );
    console.log("medicineProvider -> addMedicine ::: New Medicine created");
    return createdMedicine;
  } catch (e) {
    throw Error(e);
  }
};

const medicineUpdation = async (medicineDoc) => {
  try {
    let medicine = await dbInstanceMedicine.getMedicineById(
      medicineDoc.medicineId
    );
    let updatedMedicine = await dbInstance.updateDocument(
      COLLECTIONS.MEDICINE_COLLECTION_NAME,
      medicine._id,
      {
        medicineName: medicineDoc.medicineName,
        companyName: medicineDoc.companyName,
        categoryID: medicineDoc.categoryID,
        typeID: medicineDoc.typeID,
        quantity: medicineDoc.quantity,
        price: medicineDoc.price,
        discount: medicineDoc.discount,
      }
    );
    console.log("medicineProvider -> medicineUpdation ::: Medicine Updated");

    return updatedMedicine;
  } catch (e) {
    throw Error(e);
  }
};

const getMedicineByStore = async (medicineDoc) => {
  try {
    let medicines = await dbInstanceMedicine.getMedicinesByStore(
      medicineDoc.storeId
    );
    
    console.log("medicineProvider -> getMedicineByStore ::: Medicine");

    return medicines;
  } catch (e) {
    throw Error(e);
  }
};

const getMedicineByCategory = async (medicineDoc) => {
  try {
    let medicines = await dbInstanceMedicine.getMedicinesByCategory(
      medicineDoc.categoryID
    );

    console.log("medicineProvider -> getMedicineByCategory ::: Medicine");

    return medicines;
  } catch (e) {
    throw Error(e);
  }
};

const getMedicineByType = async (medicineDoc) => {
  try {
    let medicines = await dbInstanceMedicine.getMedicinesByType(
      medicineDoc.typeID
    );

    console.log("medicineProvider -> getMedicineByType ::: Medicine");

    return medicines;
  } catch (e) {
    throw Error(e);
  }
};
// const getAllVendorCategories = async () => {
//   try {
//     let categories = await dbInstanceCategory.getCategories();
//     console.log("categoryProvider -> getAllVendorCategories ::: Categories");

//     return categories;
//   } catch (e) {
//     throw Error(e);
//   }
// };
// const getAllAdminCategories = async () => {
//   try {
//     let categories = await dbInstanceCategory.getCategories();
//     console.log("categoryProvider -> getAllAdminCategories ::: Categories");

//     return categories;
//   } catch (e) {
//     throw Error(e);
//   }
// };

module.exports = {
  addMedicine,
  medicineUpdation,
  getMedicineByStore,
  getMedicineByCategory,
  getMedicineByType,
  //   getAllVendorCategories,
  //   getAllAdminCategories,
  //   categoryUpdation,
};
