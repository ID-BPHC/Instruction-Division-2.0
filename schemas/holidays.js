let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let holidaysSchema = new Schema({
  day: Number,
  month: Number,
  year: Number,
  description: String
});

let model = mongoose.model("holidays", holidaysSchema);

module.exports = model;
