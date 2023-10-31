const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    image: DataTypes.STRING(255),
  }, {
    tableName: 'Users',
    underscored: true
  });


  UserTable.associate = (models) => {
    UserTable.belongsTo(models.Course, {
      foreignKey: 'userId',
      as: 'user'
    });
  }

  return UserTable;
}

module.exports = UserSchema;