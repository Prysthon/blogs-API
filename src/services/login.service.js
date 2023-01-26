const { validateLogin } = require('./validations/validationLoginValues');

const loginUser = async (userInf) => validateLogin(userInf);

module.exports = {
  loginUser,
};
