const { postService } = require('../services');
const errorMap = require('../utils/errorMap');

const insertPost = async (req, res) => {
  const { type, message } = await postService.insertPost(req.body, req.user);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllPosts = async (req, res) => {
  const { type, message } = await postService.getAllPosts();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const getPostById = async (req, res) => {
  const { type, message } = await postService.getPostById(req.params.id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const updatePost = async (req, res) => {
  const { type, message } = await postService.updatePost(req.body, req.params.id, req.user);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  insertPost,
  getAllPosts,
  getPostById,
  updatePost,
};