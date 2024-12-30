const express = require("express");
const bodyparse = require("body-parser"); 
const sequelize = require("./sequelize/config");
const Movie = require("./movies/movie.model");
const movieRoutes = require("./movies/routes");
const userRoutes = require("./users/routes");
const User = require("./users/user.model");

const app = express();

sequelize.authenticate()
.then(async () => {
    await sequelize.sync();
    await Movie.sync({alter: true});
    await User.sync({alter: true});
    console.log("Database connection successful");
})
.catch((err) => {
    console.log("Error in database connection :", err);
})

app.use(bodyparse.urlencoded({ extended: false}));
app.use(bodyparse.json());

app.use("/movies", movieRoutes);
app.use("/users", userRoutes);

app.listen(3010, () => {
    console.log("App started on port : ", 3010);  
});