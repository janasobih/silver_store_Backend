const express = require("express");
const {
  addCategory,
  getCategory,
  getoneCategory,
  deletCategory,
  updateCategory,
} = require("../controllars/CatecoryControllar");
const Router = express.Router();

Router.post("/", addCategory);
Router.delete("/:id", deletCategory);
Router.get("/", getCategory);
Router.get("/:id", getoneCategory);
Router.patch("/:id", updateCategory);

module.exports = Router;
