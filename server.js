// modules =================================================
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./config/db.js');
var userController = require('./app/controllers/userController');
var studentController = require('./app/controllers/studentController');
var contactController = require('./app/controllers/contactController');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;


app.get('/', (req, res) => res.send('Welcome to Mean Stack Project!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/api/users', userController);
app.use('/api/students', studentController);
app.use('/api/contact', contactController);