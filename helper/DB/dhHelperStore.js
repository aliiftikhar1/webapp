const mongoose = require("mongoose");
const constant = require("../../config/constant");
const { StoreModel } = require("../../schema/store");

class DbHelperStore {
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
  async getStores() {
    try {
      await this.connect();
      let storeData = await StoreModel.find()
      return storeData;
    } catch (e) {
      console.error("DbHelper Error while getStores ::: ", e);
      throw e;
    }
  }
  async getStoreByName(name) {
    try {
      await this.connect();
      let storeData = await StoreModel.findOne({
        storeName: name,
      });
      return storeData;
    } catch (e) {
      console.error("DbHelper Error while getStoreByName ::: ", e);
      throw e;
    }
  }

  async getStoreById(_id) {
    try {
      await this.connect();
      let storeData = await StoreModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return storeData;
    } catch (e) {
      console.error("DbHelper Error while getStoreById ::: ", e);
      throw e;
    }
  }
  async getStoresByVendorId(vendorId) {
    try {
      await this.connect();
      let storeData = await StoreModel.find({ vendorId });
      return storeData;
    } catch (e) {
      console.error("DbHelper Error while getStoreByVendor ::: ", e);
      throw e;
    }
  }

  async getUserByEmail(email) {
    try {
      await this.connect();
      let userData = await UserModel.findOne({ email });
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserByEmail ::: ", e);
      throw e;
    }
  }

  async getUserByRefreshToken(refreshToken) {
    try {
      await this.connect();
      let userData = await UserModel.findOne({ refreshToken });
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserByRefreshToken ::: ", e);
      throw e;
    }
  }

  async ifTokenExist(resetPinJwt) {
    try {
      console.log("resetPinJwt-------------------->", resetPinJwt);
      await this.connect();
      let userData = await UserModel.findOne({ resetPinJwt });
      return userData;
    } catch (e) {
      console.error("DbHelper Error while ifTokenExist ::: ", e);
      throw e;
    }
  }

  async close() {
    return await this.db.close();
  }
}

module.exports = {
  DbHelperStore,
};
