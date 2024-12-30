const Movie = require("../movies/movie.model");
const User = require("./user.model");

const createUser = async (userDetail) => {
    const userData = await User.create(userDetail);
    return userData;
}

const getMovieRecommendation = async(userId) => {
    const user = await User.findOne({ where: { id: userId, isActive: true }});
    const movie = await Movie.findAll({ where: { genre: user.genre, rating: user.rating }});
    return movie;
}

module.exports = {
    createUser,
    getMovieRecommendation,
}































// const getSingleUser = async(userId) => {
//     const user = await User.findOne({ where: { id: userId, isActive: true }});
//     return user;
//   }