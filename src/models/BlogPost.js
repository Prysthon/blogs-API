module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE, // createdAt
      updated: DataTypes.DATE, // updatedAt
    },
    {
      createdAt: 'published',
      updatedAt: 'updated',
      underscored: true,
      tableName: 'blog_posts'
    }
  );

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  };

  return BlogPosts;
};
