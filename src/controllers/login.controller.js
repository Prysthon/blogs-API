const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
const errorMap = require('../utils/errorMap');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const insertUser = async (req, res) => {
  const { type, message } = await loginService.insertUser(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  const token = jwt.sign({ data: req.body.email }, secret, jwtConfig);
  res.status(200).json({ token });
};

module.exports = {
  insertUser,
};