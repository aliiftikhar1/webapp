var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema(
  {
    categoryName: { type: String, required: [true, "category name not found"] },
    categoryCode: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    isDelete: { type: Boolean, default: false },
  },
  {
    collection: "categories",
  }
);

module.exports = {
  CategoryModel: mongoose.model("categories", categorySchema),
};
