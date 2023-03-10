const { User } = require('../../models');
const { loginUserSchema } = require('./schema');

const validateLogin = async (userInf) => {
  const error = await loginUserSchema.validate(userInf);
  if (error.error) return { type: 'INVALID_FIELDS', message: 'Some required fields are missing' };
  const user = await User.findOne({
    where: { email: userInf.email },
  });
  if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  return { type: null, message: user };
};

module.exports = {
  validateLogin,
};
