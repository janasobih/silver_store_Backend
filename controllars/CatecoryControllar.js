const Category = require("../model/CatecoryModel");

const addCategory = async (req, res) => {
  const { title, image } = req.body;

  if (!title || !image) {
    return res.status(400).json({
      state: 400,
      message: "All fields required",
      data: null,
    });
  }

  const existingCategory = await Category.findOne({ title }); // هنا قمنا بتعديل الاسم ليكون existingCategory
  if (existingCategory) {
    return res.status(200).json({
      status: 200,
      message: "Category already added",
      data: null,
    });
  }

  const newCategory = new Category({
    title,
    image,
  });

  await newCategory.save();
  res.status(201).json({
    states: 201,
    message: "Category added successfully",
    data: newCategory,
  });
};

const getCategory = async (req, res) => {
  try {
    const Categories = await Category.find({});
    res.status(200).json({
      result: Categories.length,
      data: Categories,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getoneCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    res.status(200).json({
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      error: error.message,
      data: null,
    });
  }
};

const deletCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json({
      status: 200,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
      data: null,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const category = await Category.findOneAndUpdate(
      { _id: id },
      { title },
      { new: true },
    );
    res.status(200).json({
      status: 200,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
      data: null,
    });
  }
};
module.exports = {
  addCategory,
  getCategory,
  getoneCategory,
  deletCategory,
  updateCategory,
};
