const mongoose = require('mongoose');

var User = mongoose.model('user', {
   studentID: { type: String},
   password : {type : String}
}, 'users');

module.exports = { User }; // { User: User}