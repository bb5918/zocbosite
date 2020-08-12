const express = require('express');
const router = express.Router();
const multer = require('multer');
var ffmpeg = require('fluent-ffmpeg');

const { Problem } = require("../models/Problem");



//=================================
//             Problem
//=================================
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})


var upload = multer({ storage: storage }).single("file")

router.post('/image', (req, res) => {

    //가져온 이미지를 저장을 해주면 된다.
    upload(req, res, err => {
        if (err) {
            return req.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

})



router.post("/getProblems", (req, res) => {

    Problem.find({ "postId": req.body.examId })
        .populate('writer')
        .exec((err, problems) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, problems })
        })
});


router.post("/getProblem", (req, res) => {

    Problem.findOne({ "_id": req.body.problemId })
        .populate('writer')
        .exec((err, problem) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success: true, problem })
        })
});






router.post("/uploadProblem", (req, res) => {

    const problem = new Problem(req.body)

    problem.save((err, problem) => {
        if (err) return res.status(400).json({ success: false, err })

        Problem.find({ '_id': problem._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })


    })

});


module.exports = router;
