const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/random', async (req, res) => {
    try {
        const question = await Question.getRandomQuestion();
        if (!question) {
            return res.status(404).json({ message: 'No questions found' });
        }
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
