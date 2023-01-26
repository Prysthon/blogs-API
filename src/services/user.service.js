const { User } = require('../models');
const { validateInsertUser } = require('./validations/validationUserValues');

const insertUser = async (userInf) => { 
  const result = await validateInsertUser(userInf);
  if (result.type) return result;
  const { displayName, email, password, image } = userInf;
  await User.create({
    displayName,
    email,
    password,
    image,
  });
  return { type: null, message: '' };
};

const getAllUsers = async () => User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

module.exports = {
  insertUser,
  getAllUsers,
};
