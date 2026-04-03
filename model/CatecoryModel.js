const mongoose = require("mongoose");

const category = new mongoose.Schema(
  {
    image: {
      require: true,
      type: String,
    },
    title: {
      require: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Category = mongoose.model("category", category);
module.exports = Category;
