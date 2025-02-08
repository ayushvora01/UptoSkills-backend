const mongoose = require("mongoose");

const StatisticsSchema = new mongoose.Schema({
  creativeEvents: { type: Number, required: true },
  skillTutors: { type: Number, required: true },
  onlineTrainings: { type: String, required: true },
  peopleWorldwide: { type: String, required: true },
});

module.exports = mongoose.model("Statistics", StatisticsSchema);
