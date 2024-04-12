import mongoose, { Schema } from "mongoose";

const movieSchema = new mongoose.Schema({
  first_name: String,
  age: String,
  email: String,
  password: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
