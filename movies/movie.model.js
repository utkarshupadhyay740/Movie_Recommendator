const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize/config");

const Movie = sequelize.define(
    "Movie",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false,
          },
    },
    { timestamps: true, createdAt: true, updatedAt: true, tableName: 'movies'}
);

module.exports = Movie;