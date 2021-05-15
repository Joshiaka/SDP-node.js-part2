const mongoose = require('mongoose');

var Contact = mongoose.model('contact', {
   Email: { type: String},
   inqriry : {type : String}
}, 'contact');

module.exports = { Contact }; // { User: User}