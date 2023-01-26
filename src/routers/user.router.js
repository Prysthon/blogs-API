const express = require('express');

const { userController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  userController.insertUser,
);

router.get(
  '/',
  validateJWT,
  userController.getAllUsers,
);

router.get(
  '/:id',
  validateJWT,
  userController.getUserById,
);

module.exports = router;