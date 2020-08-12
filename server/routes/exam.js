const express = require('express');
const router = express.Router();
const multer = require('multer');
var ffmpeg = require('fluent-ffmpeg');

const { Exam } = require("../models/Exam");



router.get("/getExams", (req, res) => {

    Exam.find()
        .populate('writer')
        .exec((err, exams) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, exams })
        })

});



router.post("/uploadExam", (req, res) => {

    const exam = new Exam(req.body)

    exam.save((err, exam) => {
        if (err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

});


router.post("/getExam", (req, res) => {

    Exam.findOne({ "_id": req.body.examId })
        .populate('writer')
        .exec((err, exam) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, exam })
        })
});

module.exports = router;
