  
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-project', (err) => {
    if (!err)
        console.log('DB connection succeeded.');
    else
        console.log('DB connection Failed : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
