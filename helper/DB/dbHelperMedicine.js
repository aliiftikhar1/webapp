const mongoose = require("mongoose");
const { CategoryModel } = require("../../schema/category");
// const console = require('../logger');
const constant = require("../../config/constant");
const { MedicineModel } = require("../../schema/medicine");

class DbHelperMedicine {
  async connect() {
    if (!this.db) {
      try {
        await mongoose.connect(`${constant.MONGO_DB_URL}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        this.db = mongoose.connection;
        console.log("MongoClient Connection successful.");
        return;
      } catch (e) {
        console.error("DbHelper Error while connect mongodb ::: ", e);
        throw Error(e);
      }
    }
  }

  async getMedicineByName(medicineName) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.findOne({
        medicineName: medicineName,
      });
      return medicineData;
    } catch (e) {
      console.error("DbHelper Error while getCategoryByName ::: ", e);
      throw e;
    }
  }

  async getMedicineByNameCompanyCategoryTypeStore(
    medicineName,
    companyName,
    storeId,
    categoryID,
    typeID
  ) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.findOne({
        medicineName,
        companyName,
        storeId,
        categoryID,
        typeID,
      });
      return medicineData;
    } catch (e) {
      console.error(
        "DbHelper Error while getMedicineByNameCategoryTypeStore ::: ",
        e
      );
      throw e;
    }
  }

  async getMedicineById(_id) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return medicineData;
    } catch (e) {
      console.error("DbHelper Error while getMedicineById ::: ", e);
      throw e;
    }
  }

  async getMedicinesByStore(storeId) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.find({ storeId: storeId });
      return medicineData;
    } catch (e) {
      console.error("DbHelper Error while getMedicinesByStore ::: ", e);
      throw e;
    }
  }

  async getMedicinesByCategory(categoryID) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.find({ categoryID: categoryID });
      return medicineData;
    } catch (e) {
      console.error("DbHelper Error while getMedicinesByCategory ::: ", e);
      throw e;
    }
  }

  async getMedicinesByType(typeID) {
    try {
      await this.connect();
      let medicineData = await MedicineModel.find({ typeID: typeID });
      return medicineData;
    } catch (e) {
      console.error("DbHelper Error while getMedicinesByType ::: ", e);
      throw e;
    }
  }
  async getCategories() {
    try {
      await this.connect();
      let categoryData = await CategoryModel.find();
      return categoryData;
    } catch (e) {
      console.error("DbHelper Error while getCategories ::: ", e);
      throw e;
    }
  }

  async close() {
    return await this.db.close();
  }
}

module.exports = {
  DbHelperMedicine,
};
