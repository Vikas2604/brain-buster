const express = require('express');
const router = express.Router();
const { handleContactSubmission } = require('../controllers/contactController');

// POST route for contact submissions
router.post('/', handleContactSubmission);

module.exports = router;
