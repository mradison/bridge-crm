require('dotenv').config();
const mongoose = require('mongoose');

const myuser = process.env.REACT_APP_MongoUser
const mypass = process.env.REACT_APP_MongoPW

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://' + myuser + ':' + mypass + '@cluster0.wj6j9lt.mongodb.net/bridge-crm');

module.exports = mongoose.connection;
