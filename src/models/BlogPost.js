const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    content: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    published: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    updated: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, {
      tableName: 'blogPosts',
      underscored: true,
      timestamps : false,
    });
    
    BlogPostTable.associate = (models) => {
      BlogPostTable.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }

    return BlogPostTable;
  }

  module.exports = BlogPostSchema;
