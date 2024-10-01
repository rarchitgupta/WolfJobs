const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wolfjobs_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

db.once('open',function(){
    console.log('Connected to database :: MongoDB')
})


module.exports = db;