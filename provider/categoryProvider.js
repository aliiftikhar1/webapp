const message = require("../config/messages");
const { DbHelper } = require("../helper/DB/dbHelper");
const { DbHelperCategory } = require("../helper/DB/dhHelperCategory");
const { COLLECTIONS } = require("../config/constant");
const crypto = require("crypto");

//create instance of
const dbInstance = new DbHelper();
const dbInstanceCategory = new DbHelperCategory();

const addCategory = async (categoryDoc) => {
    let parentCode='CT'
    console.log(categoryDoc.categoryName);
  try {
    let categoryExists = await dbInstanceCategory.getCategoryByName(
      categoryDoc.categoryName
    );

    if (categoryExists) {
      throw message.error.CATEGORY_ALREADY_EXIST;
    }
    let code = crypto.randomInt(0, 100);
    parentCode=parentCode+code;
    categoryDoc.categoryCode = parentCode;

    let createdCategory = await dbInstance.insertDocument(
      COLLECTIONS.CATEGORIES_COLLECTION_NAME,
      categoryDoc
    );
    console.log("categoryProvider -> addCategory ::: New Category created");
    return createdCategory;
  } catch (e) {
    throw Error(e);
  }
};


const categoryUpdation = async (categoryDoc) => {
  try {
    let category = await dbInstanceCategory.getCategoryById(
      categoryDoc.categoryId
    );
    let updatedCategory = await dbInstance.updateDocument(
      COLLECTIONS.CATEGORIES_COLLECTION_NAME,
      category._id,
      {
        categoryName: categoryDoc.categoryName,
      }
    );
    console.log("categoryProvider -> categoryUpdation ::: Category Updated");

    return updatedCategory;
  } catch (e) {
    throw Error(e);
  }
};
const getAllVendorCategories = async () => {
  try {
    let categories = await dbInstanceCategory.getCategories();
    console.log("categoryProvider -> getAllVendorCategories ::: Categories");

    return categories;
  } catch (e) {
    throw Error(e);
  }
};
const getAllAdminCategories = async () => {
  try {
    let categories = await dbInstanceCategory.getCategories();
    console.log("categoryProvider -> getAllAdminCategories ::: Categories");

    return categories;
  } catch (e) {
    throw Error(e);
  }
};



module.exports = {
  addCategory,
  getAllVendorCategories,
  getAllAdminCategories,
  categoryUpdation,
};
