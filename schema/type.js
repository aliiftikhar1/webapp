var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var typeSchema = new Schema(
  {
    typeName: { type: String, required: [true, "type name not found"] },
    typeCode: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    isDelete: { type: Boolean, default: false },
  },
  {
    collection: "types",
  }
);

module.exports = {
  TypeModel: mongoose.model("types", typeSchema),
};
