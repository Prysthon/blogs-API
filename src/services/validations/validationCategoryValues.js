const { insertCategorySchema } = require('./schema');

const validateCategory = async (catInf) => {
  const error = await insertCategorySchema.validate(catInf);
  if (error.error) return { type: 'INVALID_FIELDS', message: '"name" is required' };
  return { type: null, message: '' };
};

module.exports = {
  validateCategory,
};
