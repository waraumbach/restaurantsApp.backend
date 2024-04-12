import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  gener: String,
  year: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
