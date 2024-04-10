import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("This is my API running...");
});

app.listen(8000, () => {
  console.log(`server is running on port 8000`);
});
