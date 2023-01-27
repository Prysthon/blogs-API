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

router.delete(
  '/me',
  validateJWT,
  userController.deleteUserByToken,
);

module.exports = router;