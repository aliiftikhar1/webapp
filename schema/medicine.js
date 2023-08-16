var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var medicineSchema = new Schema(
  {
    medicineName: String,
    companyName: String,
    storeId: String,
    categoryID: String,
    typeID: String,
    quantity: String,
    price: String,
    discount: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    active: { type: Boolean, default: false },
    isDelete: { type: Boolean, default: false },
  },
  {
    collection: "medicines",
  }
);
module.exports = {
  MedicineModel: mongoose.model("medicines", medicineSchema),
};
