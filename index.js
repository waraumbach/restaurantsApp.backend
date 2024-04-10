import express from "express";

const app = express();

const restaurantsData = [
  {
    id: 1,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
  {
    id: 2,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
  {
    id: 3,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
  {
    id: 4,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
  {
    id: 5,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
  {
    id: 5,
    name: "kfc",
    reviews: "4",
    location: "Germany",
    type: "fast food",
  },
];

app.get("/", (request, response) => {
  response.send("welcome to my restaurant API");
});
//route : data// restaurantsdata to localhost 30000
app.get("/restaurants", (request, response) => {
  response.json(restaurantsData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
