const Movie = require("./movie.model");

const createMovie = async (movieDetail) => {
    const movieData = await Movie.create(movieDetail);
    return movieData;
}

const getAllMovie = async () => {
    const movieData = await Movie.findAll();
    return movieData;
}

const getMovieById = async (movieId) => {
    const movieData = await Movie.findOne({ where : { id: movieId }});
    return movieData;
}

const updateMovie = async (movieId, updateMovieData) => {
    const findMovie = await Movie.findOne({ where: { id: movieId }});
    if(findMovie){
        const update = await Movie.update(updateMovieData, {where: {id : movieId}});
        return update;
    }
    return null;
}

const deleteMovie = async (movieId) => {
    const findMovie = await Movie.findOne({ where : { id : movieId }});
    if(findMovie){
        const deleteMovieData = await Movie.destroy({ where : { id : movieId }})
        return deleteMovieData;
    }
    return null;
}

module.exports = {
    createMovie,
    getAllMovie,
    getMovieById,
    updateMovie,
    deleteMovie
}