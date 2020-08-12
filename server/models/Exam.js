const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subject: {
        type: String,
        maxlength: 50,
    },
    professor: {
        type: String,
    },
    description: {
        type: String,
    }
    ,
    level: {
        type: Number,
    },
    char: {
        type: Number,
    },

}, { timestamps: true })


const Exam = mongoose.model('Exam', examSchema);

module.exports = { Exam }