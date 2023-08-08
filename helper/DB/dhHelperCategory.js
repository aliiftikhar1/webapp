const mongoose = require("mongoose");
const { CategoryModel } = require("../../schema/category");
// const console = require('../logger');
const constant = require("../../config/constant");

class DbHelperCategory {
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

  async getCategoryByName(categoryName) {
    try {
      await this.connect();
      let categoryData = await CategoryModel.findOne({
        categoryName: categoryName,
      });
      return categoryData;
    } catch (e) {
      console.error("DbHelper Error while getCategoryByName ::: ", e);
      throw e;
    }
  }
  async getCategoryById(_id) {
    try {
      await this.connect();
      let categoryData = await CategoryModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return categoryData;
    } catch (e) {
      console.error("DbHelper Error while getCategoryById ::: ", e);
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
  DbHelperCategory,
};
