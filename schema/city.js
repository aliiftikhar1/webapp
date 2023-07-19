var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var citySchema = new Schema(
  {
    cityName: { type: String, required: [true, "city name not found"] },
    cityCode: { type: String, required: [true, "city code not found"] },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    isDelete: { type: Boolean, default: false },
  },
  {
    collection: "cities",
  }
);

module.exports = {
  CityModel: mongoose.model("cities", citySchema),
};
