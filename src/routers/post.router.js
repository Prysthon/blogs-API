const express = require('express');

const { postController } = require('../controllers');

const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post(
  '/',
  validateJWT,
  postController.insertPost,
);

router.get(
  '/',
  validateJWT,
  postController.getAllPosts,
);

router.get(
  '/:id',
  validateJWT,
  postController.getPostById,
);

module.exports = router;