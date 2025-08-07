const express = require("express");
const routes = express.Router();
const movieController = require("../controllers/movieController");

routes.get("/", movieController.getAllMovies);
routes.get("/:id", movieController.getMovieById);
routes.post("/", movieController.createMovie);
routes.put("/:id", movieController.updateMovie);
routes.delete("/:id", movieController.deleteMovie);

module.exports = routes;
