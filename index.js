import express, { request, response } from "express";
import restaurantsData from "./data/restaurantsData.js";
import cors from "cors";
const app = express();

app.use(express.static("public"));
app.use(cors());

app.get("/", (request, response) => {
  response.send("welcome to my restaurant API");
});
//route : data// restaurantsdata to localhost 30000
app.get("/restaurants", (request, response) => {
  response.json(restaurantsData);
});
//access to data to id
app.get("/restaurants/:id", (request, response) => {
  let { id } = request.params;
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.id === parseInt(id)
  );
  request.json(restaurant);
});
//call port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
