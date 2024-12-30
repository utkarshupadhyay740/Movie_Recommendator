const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/config");
const Movie = require("../movies/movie.model");

const User = sequelize.define(
    "User",
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
 { timestamps: true, createdAt: true, updatedAt: true, tableName: 'users' }   
);                                                                             

User.belongsToMany(Movie, { through: "user_has_movies"});
Movie.belongsToMany(User, { through: "user_has_movies"})

module.exports = User;