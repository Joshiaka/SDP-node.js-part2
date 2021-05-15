const express = require('express');
const { User } = require('../models/user');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    User.find((err, users) => {
        if(err) res.send(err);
        else res.send(users);
    });
});

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     User.findById( req.params.id, (err, user) => {
//         if(err) res.send(err);
//         else res.send(user);
//     });
// });

router.get('/:studentID', (req, res) => {
    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findOne( {studentID: req.params.studentID}, (err, user) => {
        if(err) res.send(err);
        else res.send(user);
    });
});


router.post('/', (req, res) => {
    let user = new User({
        studentID: req.body.studentID,
        password: req.body.password
    });
    user.save((err) => {
        if(err) res.send(err);
        else res.json({message: 'User Created'});
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

    let user = new User({
        studentID: req.body.studentID,
        password: req.body.password
    });
    User.findOneAndUpdate( req.params.id, {$set: user}, {new: true}, (err) => {
        if(err)
            res.send(err);
        else res.json(user);
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        else res.json({message: 'User Deleted'});
    });
});

module.exports = router;