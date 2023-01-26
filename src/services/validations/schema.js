const Joi = require('joi');

const insertUserSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

module.exports = {
  insertUserSchema,
};