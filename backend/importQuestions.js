const mongoose = require('mongoose');
const Question = require('./models/Question');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(`mongodb+srv://brainbuster015:brainbuster11@brainbuster.uv7bn.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => {
        console.error("Database connection error:", err);
        process.exit(1);
    });

const importQuestions = async () => {
    const files = [
        'easy_aptitude_questions.json',
        'hard_aptitude_questions.json',
        'hot_aptitude_questions.json',
        'medium_aptitude_questions.json'
    ];

    try {
        for (const file of files) {
            const filePath = path.join(__dirname, 'data', file);
            const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            await Question.insertMany(questions);
            console.log(`Imported ${questions.length} questions from ${file}`);
        }
    } catch (error) {
        console.error("Error importing questions:", error);
    } finally {
        mongoose.connection.close();
    }
};

importQuestions();
