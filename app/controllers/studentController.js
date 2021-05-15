const express = require('express');
const { Student } = require('../models/student');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


router.get('/', (req, res) => {
    Student.find((err, students) => {
        if(err) res.send(err);
        else res.send(students);
    });
});

router.get('/:studentID', (req, res) => {
    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record with given id : ${req.params.id}`);

        Student.findOne( {studentID: req.params.studentID}, (err, student) => {
        if(err) res.send(err);
        else res.send(student);
    });
});


router.post('/', (req, res) => {
    let student = new Student();
    student.name = req.body.name;
    student.studentID = req.body.studentID;
    student.attendence = req.body.attendence;
    student.sem = req.body.sem;
    student.department = req.body.department;
    student.marks = req.body.marks;

    student.save((err) => {
        if(err)
            res.send(err);
        else res.json({message: 'Student Created'});
    });
});


router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Student.findByIdAndRemove(req.params.id, (err, student) => {
        if (err)
            res.send(err);
        else res.json({message: 'Student Deleted'});
    });
});


module.exports = router;