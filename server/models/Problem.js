const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: String,
    },
    content: {
        type: String
    },
    images: {
        type: Array,
        default: []
    }
}, { timestamps: true })


const Problem = mongoose.model('Problem', problemSchema);

module.exports = { Problem }