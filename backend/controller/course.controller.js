const Course = require("../models/course.modal");

// Create a new course
const createCourse = async (req, res) => {
  const { body, file } = req;

  try {
    body.image = file?.path;
    console.log(body);
    const course = await Course.create(body);

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single course by ID
const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a course by ID
const updateCourse = async (req, res) => {
  try {
    const { file, body } = req;

    if (file?.path) {
      body.image = file?.path;
    }

    const course = await Course.findByIdAndUpdate(req.params._id, body, {
      new: true,
    });
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params._id);
    if (!course) {
      return res.status(404).json({ message: "course not found" });
    }
    await Course.deleteOne();
    res.status(200).json({ message: "course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
