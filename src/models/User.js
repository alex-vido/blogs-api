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
    tableName: 'users',
    underscored: true,
    timestamps : false,
  });

/*
  UserTable.associate = (models) => {
    UserTable.belongsTo(models.blog_posts, {
      foreignKey: 'userId',
      as: 'user'
    });
  }
*/

  return UserTable;
}

module.exports = UserSchema;