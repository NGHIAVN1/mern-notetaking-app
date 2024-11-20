const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/NoteTakingApp';
const connect = mongoose.connect(url, ()=>console.log('connected to db'));

module.exports = connect;