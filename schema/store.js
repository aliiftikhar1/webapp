var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var storeSchema = new Schema(
  {
    storeName: { type: String, required: [true, "store name not found"] },
    vendorId: { type: String, required: [true, "vendor id  not found"] },
    cityName: String,
    storeId: String,
    verificationCode: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: false },
    isDelete: { type: Boolean, default: false },
  },
  {
    collection: "stores",
  }
);
module.exports = {
  StoreModel: mongoose.model("stores", storeSchema),
};
