const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const fs = require('fs');
const path = require('path');

// Route to upload JSON files
router.post('/upload', async (req, res) => {
    const dataPath = path.join(__dirname, '../data');
    fs.readdir(dataPath, async (err, files) => {
        if (err) return res.status(500).send('Error reading data directory');

        for (const file of files) {
            if (file.endsWith('.json')) {
                const filePath = path.join(dataPath, file);
                const fileData = fs.readFileSync(filePath);
                const questions = JSON.parse(fileData);

                await Question.insertMany(questions);
            }
        }
        res.status(200).send('Questions uploaded successfully');
    });
});

router.get('/random', async (req, res) => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 50 } }]);
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).send('Error retrieving questions');
    }
});
