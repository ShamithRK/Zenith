const express = require('express');
const router = express.Router();
const { generateCertificate } = require('../controllers/certificateController');
const auth = require('../middleware/auth');

router.post('/generate', auth, generateCertificate);

module.exports = router;
