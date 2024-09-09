const mongoose = require("mongoose");
const { Schema } = mongoose;
const BoardSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  total_battles: {
    type: Number,
    required: true,
  },
  battles_won: {
    type: Number,
    required: true,
  },
  battles_lost: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Board", BoardSchema);
