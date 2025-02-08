const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    originalPrice: { type: String, required: true },
    students: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("Course", CourseSchema);
