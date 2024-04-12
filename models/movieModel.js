import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  review: String,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
