const mongoose = require("mongoose");
const { TypeModel } = require("../../schema/type");
// const console = require('../logger');
const constant = require("../../config/constant");

class DbHelperType {
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

  async getTypeByName(typeName) {
    try {
      await this.connect();
      let typeData = await TypeModel.findOne({
        typeName: typeName,
      });
      return typeData;
    } catch (e) {
      console.error("DbHelper Error while getTypeByName ::: ", e);
      throw e;
    }
  }
  async getTypeById(_id) {
    try {
      await this.connect();
      let typeData = await TypeModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return typeData;
    } catch (e) {
      console.error("DbHelper Error while getTypeById ::: ", e);
      throw e;
    }
  }
  async getTypes() {
    try {
      await this.connect();
      let typeData = await TypeModel.find();
      return typeData;
    } catch (e) {
      console.error("DbHelper Error while getTypes ::: ", e);
      throw e;
    }
  }

  async close() {
    return await this.db.close();
  }
}

module.exports = {
  DbHelperType,
};
