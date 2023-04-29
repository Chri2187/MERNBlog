const mongoose = require('mongoose');
mongoose.connect(process.env.MDB_URI).then(() => {
    console.log('Connected to DB');
}).catch(err => {
    console.log(err);
})

module.exports = mongoose