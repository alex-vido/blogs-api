const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
    }, {
      tableName: 'categories',
      underscored: true,
      timestamps : false,
    });

    return UserTable;
  }
  
  module.exports = UserSchema;