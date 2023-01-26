const express = require('express');

const { loginController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  loginController.insertUser,
);

module.exports = router;