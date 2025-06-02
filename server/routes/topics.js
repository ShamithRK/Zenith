const express = require('express');
const router = express.Router();
const { createTopic, getTopicsByCourse } = require('../controllers/topicController');
const auth = require('../middleware/auth');

router.post('/', auth, createTopic);
router.get('/:courseId', auth, getTopicsByCourse);

module.exports = router;
