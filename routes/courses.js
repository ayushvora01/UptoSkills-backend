const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// @route   GET /api/courses
// @desc    Get all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// @route   POST /api/courses
// @desc    Add a new course
router.post("/", async (req, res) => {
    const { title, date, description, price, originalPrice, students, image } = req.body;

    try {
        const newCourse = new Course({
            title,
            date,
            description,
            price,
            originalPrice,
            students,
            image
        });

        const course = await newCourse.save();
        res.json({ message: "Course added successfully", course });
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;
