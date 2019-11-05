module.exports = function(sequelize, DataTypes) {
  let Movies = sequelize.define("movies", {
    movie_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 255]
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seen: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    user_token: DataTypes.STRING,
    user_ranking: DataTypes.FLOAT,
    poster: DataTypes.STRING,
    summary: DataTypes.TEXT
  });
  return Movies;
};
