const Joi = require('joi');

const loginUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const insertUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6),
  image: Joi.string().allow(null, ''),
});

const insertCategorySchema = Joi.object({
  name: Joi.string().required(),
});

const insertPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
});

module.exports = {
  loginUserSchema,
  insertUserSchema,
  insertCategorySchema,
  insertPostSchema,
};