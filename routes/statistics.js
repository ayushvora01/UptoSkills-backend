const express = require("express");
const router = express.Router();
const Statistics = require("../models/Statistics");

// Get statistics
router.get("/", async (req, res) => {
  try {
    const stats = await Statistics.findOne(); // Retrieve one document
    if (!stats) {
      return res.status(404).json({ message: "Statistics not found" });
    }
    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add statistics (for testing or setup)
router.post("/", async (req, res) => {
  try {
    const { creativeEvents, skillTutors, onlineTrainings, peopleWorldwide } = req.body;

    const stats = new Statistics({
      creativeEvents,
      skillTutors,
      onlineTrainings,
      peopleWorldwide,
    });

    await stats.save();
    res.status(201).json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
