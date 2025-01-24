const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb+srv://brainbuster015:brainbuster11@brainbuster.uv7bn.mongodb.net/')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/questions', require('./routes/questionRoutes'));

module.exports = app;
