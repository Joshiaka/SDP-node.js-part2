const express = require('express');
const { Contact } = require('../models/contact');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Contact.find((err, contact) => {
        if(err) res.send(err);
        else res.send(contact);
    });
});

router.get('/:Email', (req, res) => {
    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record with given id : ${req.params.id}`);

    Contact.findOne( {Email: req.params.Email}, (err, contact) => {
        if(err) res.send(err);
        else res.send(contact);
    });
});

router.post('/', (req, res) => {
    let contact = new Contact({
        Email: req.body.Email,
        inqriry: req.body.inqriry
    });
    contact.save((err) => {
        if(err) res.send(err);
        else res.json({message: 'Contact Created'});
    });
});

router.put('/:Email', (req, res) => {
    if (!ObjectId.isValid(req.params.Email))
    return res.status(400).send(`No record with given Email : ${req.params.Email}`);

    let contact = new Contact({
        Email: req.body.Email,
        inqriry: req.body.inqriry
    });
    Contact.findOneAndUpdate( req.params.id, {$set: contact}, {new: true}, (err) => {
        if(err)
            res.send(err);
        else res.json(contact);
    });
});

router.delete('/:Email', (req, res) => {
    if (!ObjectId.isValid(req.params.Email))
        return res.status(400).send(`No record with given Email: ${req.params.Email}`);

    Contact.findByIdAndRemove(req.params.Email, (err, contact) => {
        if (err)
            res.send(err);
        else res.json({message: 'Contact Deleted'});
    });
});

module.exports = router;