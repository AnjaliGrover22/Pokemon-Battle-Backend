const express = require("express");

const {
  getAllScores,
  createScore,
  getScoreBoardByusername,
  EditScoreBoardByusername,
} = require("../controllers/board_controllers");

const api = express.Router();

api.route("/").get(getAllScores).post(createScore);
api
  .route("/:username")
  .get(getScoreBoardByusername)
  .put(EditScoreBoardByusername);

module.exports = api;
