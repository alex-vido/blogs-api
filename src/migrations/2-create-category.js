'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      });
    },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};
