const { getAllCategories } = require('../categories.service');

const { insertPostSchema } = require('./schema');

const validatePost = async (postInf) => {
  const error = await insertPostSchema.validate(postInf);
  if (error.error) return { type: 'INVALID_FIELDS', message: 'Some required fields are missing' };

  const allCategories = await getAllCategories();
  const categoriesIds = allCategories.map(({ id }) => id);
  const checkValidIds = postInf.categoryIds.every((c) => categoriesIds.includes(c));
  if (!checkValidIds) {
    return { type: 'INVALID_FIELDS', message: 'one or more "categoryIds" not found' }; 
  }

  return { type: null, message: '' };
};

module.exports = {
  validatePost,
};
