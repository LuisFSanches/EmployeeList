require("./models/db");

const express = require("express");

const app = express();

app.listen(3333, () => {
  console.log("Express server started at port : 3333");
});
