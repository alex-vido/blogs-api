'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
      },      
    },
    {
      timestamps : false,
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('posts_categories');
  }
};