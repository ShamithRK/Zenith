const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const courseController = require('../controllers/courseController');

router.post('/', auth, role(['trainer']), courseController.createCourse);
router.get('/', auth, courseController.getAllCourses);
router.post('/enroll/:courseId', auth, role(['student']), courseController.enrollCourse);

module.exports = router;
