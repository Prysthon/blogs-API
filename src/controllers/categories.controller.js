const { categoryService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertUser = async (req, res) => {
  const { type, message } = await categoryService.insertCategory(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  insertUser,
};