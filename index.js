import express, { request, response } from "express";
import restaurantsData from "./data/restaurantsData.js";
import cors from "cors";
import mongoose from "mongoose";
import Movie from "./models/movieModel.js";
const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended : false}))

const password = "Ic3ADlHUWyBQ2KYD";
const URL =
  "mongodb+srv://Wara:Ic3ADlHUWyBQ2KYD@cluster0.gobenur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URL);

app.get("/", (request, response) => {
  response.send("welcome to my restaurant API");
});

app.get("/movies", async (req, res) => {
  //Movie.find()
  //.then((movies) => res.json(movies))
  //.catch((err) => console.log(err));
  try {
    const movies = await Movie.find();
    return res.json(movies);
  } catch (err) {
    return res.json({ message: err });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    return res.json(newMovie);
  } catch (err) {
    return res.json({ message: err });
  }
});

app.get("/restaurants", (req, res) => {
  res.json(restaurantsData);
});
//access to data to id
app.get("/restaurants/:id", (req, res) => {
  let { id } = req.params;
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.id === parseInt(id)
  );
  res.json(restaurant);
});

//call port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
