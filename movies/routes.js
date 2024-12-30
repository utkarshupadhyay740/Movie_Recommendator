const express = require("express");;
const { createMovie, getAllMovie, getMovieById, updateMovie, deleteMovie } = require("./movie");

const router = express.Router();

router.post("/create", async (req,res,next) => {
    const newMovieData = await createMovie(req.body);
    res.status(201).json({
        movieData: newMovieData,
    });
});

router.get("/get", async (req,res,next) => {
    const allMovieData = await getAllMovie();
    res.status(200).json({
        MoviesData : allMovieData,
    })
})

router.get("/getMovieById/:movieId", async (req,res,next) => {
    const movieData = await getMovieById(Number(req.params.movieId));
    if(movieData){
        res.status(200).json({
            movieData: movieData,
        })
    }
    res.status(404).json({
        message: "Movie not found",
    });
});

router.put("/update/:movieId" ,async (req,res,next) => {
    const movieData = await updateMovie(Number(req.params.movieId), req.body);
    if(movieData){
        res.status(200).json({
            updatedValue: movieData,
        })
    }
    res.status(404).json({
        message: "Movie not found"
    })
})

router.delete("/delete/:movieId", async (req,res,next) => {
    const deleteMovieData = await deleteMovie(Number(req.params.movieId));
    if(deleteMovieData){
        res.status(200).json({
            deletedValue: deleteMovieData,
            message: "Movie is deleted",
        })  
    } 
    res.status(404).json({
        message: "Movie not found",
    })
})

module.exports = router;