const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  category_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  //one-to-many
  contact: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contacts",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now(),
  },
});
const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
