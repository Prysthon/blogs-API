const { postService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertPost = async (req, res) => {
  const { type, message } = await postService.insertPost(req.body, req.user);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllPosts = async (req, res) => {
  const { type, message } = await postService.getAllPosts(req.body, req.user);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertPost,
  getAllPosts,
};