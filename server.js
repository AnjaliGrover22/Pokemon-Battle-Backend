const express = require("express");
const app = express();
require("dotenv").config();
require("colors");
const cors = require("cors");
const connectDB = require("./database/dbinit");
connectDB();

const board_routes = require("./routes/board_routes");

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Pokemon API!");
});

app.use("/api/scores", board_routes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`.bgGreen.black);
});
