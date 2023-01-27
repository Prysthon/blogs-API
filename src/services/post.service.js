const Sequelize = require('sequelize');

const { User, BlogPost, PostCategory } = require('../models');
const { validatePost } = require('./validations/validationPostValues');

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

module.exports = {
  insertPost,
};
