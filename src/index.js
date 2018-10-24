const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    data: "Cool huh"
  });
});

app.listen(8080, () => {
  console.log("Hi");
});
