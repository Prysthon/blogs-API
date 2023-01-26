const express = require('express');

const { categoryController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  categoryController.insertUser,
);

module.exports = router;