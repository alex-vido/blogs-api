const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log('headers', req.headers);
  const result = await categoryService.createCategory(name);
  return res.status(201).json(result);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};