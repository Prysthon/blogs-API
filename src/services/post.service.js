const Sequelize = require('sequelize');

const { User, BlogPost, PostCategory, Category } = require('../models');
const { validatePost, validateUpdatePost } = require('./validations/validationPostValues');

const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const insertPost = async (postInf, email) => {
  const error = await validatePost(postInf);
  if (error.type) return error;  

  const { id } = await User.findOne({ where: { email } });

  try {
    const { title, content, categoryIds } = postInf;
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create({
        title, content, userId: id, published: new Date(), updated: new Date(),
      }, { transaction: t });

      await PostCategory.bulkCreate(categoryIds
        .map((n) => ({
          postId: newPost.id, categoryId: n })), { transaction: t });
      return newPost;
    });
    return { type: null, message: result };
  } catch (e) {
    return { type: 'ERROR', message: 'Algo do service/try está errado' };
  }
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{ 
      model: User, 
      as: 'user', 
      attributes: {
      exclude: ['password'],
    },
  }, { model: Category, as: 'categories' }],
  });
  return { type: null, message: allPosts };
};

const getPostById = async (postId) => {
  const post = await BlogPost.findOne({
    where: { id: postId },
    include: [{ 
      model: User, 
      as: 'user', 
      attributes: {
      exclude: ['password'],
    },
  }, { model: Category, as: 'categories' }],
  });
  if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };
  return { type: null, message: post };
};

const updatePost = async (newPost, postId, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { userId } = await BlogPost.findOne({ where: { id: postId } });
  if (!userId || userId !== id) return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  const error = await validateUpdatePost(newPost);
  if (error.type) return error;
  await BlogPost.update({ title: newPost.title, content: newPost.content }, {
    where: { id: postId },
  });
  const { message } = await getPostById(postId);
  return { type: null, message };
};

const deletePost = async (postId, email) => {
  const { id } = await User.findOne({ where: { email } });
  const post = await BlogPost.findOne({ where: { id: postId } });
  if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };
  if (post.userId !== id) return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  await BlogPost.destroy({ where: { id: postId }, force: true });
  return { type: null, message: '' };
};

module.exports = {
  insertPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
