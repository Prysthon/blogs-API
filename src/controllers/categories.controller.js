const { categoryService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertUser = async (req, res) => {
  const { type, message } = await categoryService.insertCategory(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const users = await categoryService.getAllCategories();
  return res.status(200).json(users);
};

module.exports = {
  insertUser,
  getAllCategories,
};