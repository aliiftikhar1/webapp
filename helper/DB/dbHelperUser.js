const mongoose = require("mongoose");
const { UserModel } = require("../../schema/user");
// const console = require('../logger');
const constant = require("../../config/constant");

class DbHelperUser {
  async connect() {
    if (!this.db) {
      try {
        await mongoose.connect(`${constant.MONGO_DB_URL}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        this.db = mongoose.connection;
        console.log("MongoClient Connection successfull.");
        return;
      } catch (e) {
        console.error("DbHelper Error while connect mongodb ::: ", e);
        throw Error(e);
      }
    }
  }

  async getUserByRole(role) {
    try {
      await this.connect();
      let userData = await UserModel.find({
        role: role,
      }).select("firstName lastName email role createdDate");
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserByRole ::: ", e);
      throw e;
    }
  }

  async getUserById(_id) {
    try {
      await this.connect();
      let userData = await UserModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      });
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserById ::: ", e);
      throw e;
    }
  }
  async getUserByIdOnly(_id) {
    try {
      await this.connect();
      let userData = await UserModel.findOne({
        _id: new mongoose.Types.ObjectId(_id),
      }).select("firstName lastName email role createdDate");
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserById ::: ", e);
      throw e;
    }
  }
  async getUserByEmailAndRole(email, role) {
    try {
      await this.connect();
      let userData = await UserModel.findOne({ email, role });
      return userData;
    } catch (e) {
      console.error("DbHelper Error while getUserByEmail ::: ", e);
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
  DbHelperUser,
};
