const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const insertUser = async (req, res) => {
  const { type, message } = await userService.insertUser(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  const token = jwt.sign({ data: req.body.email }, secret, jwtConfig);
  res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getUserById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteUserByToken = async (req, res) => {
  await userService.getAllUsers(req.user);
  return res.status(204).end();
};

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
  deleteUserByToken,
};