import express from "express";
import {getAllMovies, getTopRatedMovie, getMoviesCount, getUpcomingMovies, getMovieDirectors,
sortMoviesbyRating,  getMostRecentMovie, getAverageRating, getGenreWithMostMovies, getDirectorWithMostMovies,
getMoviesInEnglish, getMoviesAboveRatingThreshold} from "./models/movies.js"

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Movies Database API 🎬");
});

// Get all movies
app.get("/movies", (req, res) => {
  res.send(getAllMovies());
});

// Get top rated movie
app.get("/movies/top-rated", (req, res) => {
  res.send(getTopRatedMovie());
});

// Get total number of movies
app.get("/movies/count", (req, res) => {
  res.send({ count: getMoviesCount() });
});

// Get upcoming movies
app.get("/movies/upcoming", (req, res) => {
  res.send(getUpcomingMovies());
});

// Get all directors
app.get("/movies/directors", (req, res) => {
  res.send(getMovieDirectors());
});

// Get movies sorted by rating
app.get("/movies/sorted-by-rating", (req, res) => {
  res.send(sortMoviesbyRating());
});

// Get the most recent movie
app.get("/movies/most-recent", (req, res) => {
  res.send(getMostRecentMovie());
});

// Get average rating
app.get("/movies/average-rating", (req, res) => {
  res.send({ averageRating: getAverageRating() });
});

// Get genre with most movies
app.get("/movies/genre-most-movies", (req, res) => {
  res.send({ genre: getGenreWithMostMovies() });
});

// Get director with most movies
app.get("/movies/director-most-movies", (req, res) => {
  res.send({ director: getDirectorWithMostMovies() });
});

// Get all English movies
app.get("/movies/in-english", (req, res) => {
  res.send(getMoviesInEnglish());
});

// Get movies above rating threshold (hardcoded threshold, e.g., 8)
app.get("/movies/above-rating", (req, res) => {
  res.send(getMoviesAboveRatingThreshold(8));
});

app.listen(8000, () => {
  console.log("Server is up and running at 8000");
});