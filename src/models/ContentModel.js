const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  content_title: { type: String, require: true, unique: true },

  content_link: { type: String, require: true, unique: true },

  content_type: { type: String, require: true },

  content_planting_culture: { type: String },
});
const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
