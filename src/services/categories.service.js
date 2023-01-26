const { Category } = require('../models');
const { validateCategory } = require('./validations/validationCategoryValues');

const insertCategory = async (catInf) => {
  const error = await validateCategory(catInf);
  if (error.type) return error;
  const newCategory = await Category.create(catInf);
  return { type: null, message: newCategory };
};

const getAllCategories = async () => Category.findAll();

module.exports = {
  insertCategory,
  getAllCategories,
};
