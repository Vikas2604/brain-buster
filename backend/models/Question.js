const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

questionSchema.statics.getRandomQuestion = async function () {
    const count = await this.countDocuments();
    const random = Math.floor(Math.random() * count);
    return this.findOne().skip(random);
};

module.exports = mongoose.model('Question', questionSchema);
