const express = require('express');

const { categoryController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  categoryController.insertUser,
);

router.get(
  '/',
  validateJWT,
  categoryController.getAllCategories,
);

module.exports = router;