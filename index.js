import express from "express";
import restaurantsData from "./data/restaurantsData.js";

const app = express();

app.get("/", (request, response) => {
  response.send("welcome to my restaurant API");
});
//route : data// restaurantsdata to localhost 30000
app.get("/restaurants", (request, response) => {
  response.json(restaurantsData);
});
//call port
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
