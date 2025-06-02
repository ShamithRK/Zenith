const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const assessmentController = require('../controllers/assessmentController');

router.post('/', auth, role(['trainer']), assessmentController.createAssessment);
router.get('/', auth, assessmentController.getAssessments);

module.exports = router;
