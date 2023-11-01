const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  console.log('headers', req.headers);
  const result = await categoryService.createCategory(name);
  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};