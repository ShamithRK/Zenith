const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({
      title,
      description,
      trainer: req.user.id,
    });
    await course.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('trainer', 'name email');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ msg: 'Course not found' });

    if (course.enrolledStudents.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Already enrolled' });
    }

    course.enrolledStudents.push(req.user.id);
    await course.save();

    res.json({ msg: 'Enrolled successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
