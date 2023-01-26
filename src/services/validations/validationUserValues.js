const { User } = require('../../models');
const { insertUserSchema } = require('./schema');

const validateInsertUser = async (userInf) => {
  const error = await insertUserSchema.validate(userInf);
  if (error.error) return { type: 'INVALID_FIELDS', message: error.error.details[0].message };
  const user = await User.findOne({
    where: { email: userInf.email },
  });
  if (user) return { type: 'CONFLICT', message: 'User already registered' };
  return { type: null, message: user };
};

module.exports = {
  validateInsertUser,
};
