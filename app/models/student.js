const mongoose = require('mongoose');

var Student = mongoose.model('student', {
   name : { type : String },
   studentID: { type: String, default: '' },
   attendence: { type: Number },
   sem: { type: String },
   department: { type: String },
   marks: [{"semester": String, "percentage": Number, "backlogs": Number}]
}, "students");

module.exports = { Student }; 