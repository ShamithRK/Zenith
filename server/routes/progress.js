const express = require('express');
const router = express.Router();
const { updateProgress, getProgressByUser } = require('../controllers/progressController');
const auth = require('../middleware/auth');

router.post('/update', auth, updateProgress);
router.get('/:userId', auth, getProgressByUser);

module.exports = router;