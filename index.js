import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("welcome to my restaurant API");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
