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

const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ['password'],
    },
  });
  if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };
  return { type: null, message: user };
};

const deleteUserByToken = async (email) => {
  const { id } = await User.findOne({ where: { email } });
  await User.destroy({ where: { id }, force: true });
  return { type: null, message: '' };
};

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
  deleteUserByToken,
};
