const express = require("express");
const router = express.Router();
const {
  createOrUpdateScore,
  getAllScores,
  getScoreBoardByUsername,
  createNewScore,
} = require("../controllers/board_controllers");

// Get all scores
router.get("/", getAllScores);

// Get score by username
router.get("/:username", getScoreBoardByUsername);

// Create or update score
router.put("/:username", createOrUpdateScore); // Update existing score or create a new one if it exists

// Create new score (separate route if needed)
router.post("/", createNewScore); // Use POST for creating new scores if needed

module.exports = router;
