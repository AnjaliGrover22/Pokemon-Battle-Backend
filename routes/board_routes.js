const express = require("express");

const {
  getAllScores,
  createScore,
} = require("../controllers/board_controllers");

const api = express.Router();

api.route("/").get(getAllScores).post(createScore);

module.exports = api;
