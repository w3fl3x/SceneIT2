module.exports = function (sequelize, DataTypes) {
    let Users = sequelize.define("users", {
      userID: DataTypes.STRING,
      user_token: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255]
        }
      }
    });
    return Users;
  };
  