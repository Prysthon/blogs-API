const express = require('express');

const { postController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  postController.insertPost,
);

module.exports = router;