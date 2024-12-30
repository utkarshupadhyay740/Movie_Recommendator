const express = require('express');
const { createUser, getMovieRecommendation } = require('./user');

const router = express.Router();

router.post("/create", async (req,res,next) => {
    const newUserData = await createUser(req.body);
    res.status(201).json({
        userData: newUserData,
    });
});

router.get("/movieRecommendation/:userId", async (req,res,next) => {
    const movieData = await getMovieRecommendation(Number(req.params.userId));
    if(movieData){
        res.status(200).json({
            movieList: movieData,
        })
    }
    res.status(404).json({
        message: "Movie data not found",
    })
})

module.exports = router;





























// router.get("/getSingleUser/:userId", async (req,res,next) => {
//     const userData = await getSingleUser(Number(req.params.userId));
//     if(userData){
//         res.status(200).json({
//             userata: userData,
//         })
//     }
//     res.status(404).json({
//         message: "User not found",
//     })
// })