const { validateLogin } = require('./validations/validationLoginValues');

const insertUser = async (userInf) => validateLogin(userInf);

module.exports = {
  insertUser,
};
