const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'postCategories',
    underscored: true,
    timestamps : false,
  });

  PostCategoryTable.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'blogPosts',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

    return PostCategoryTable;
};

module.exports = PostCategorySchema;
