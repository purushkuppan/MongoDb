const mongoose = require('mongoose')


// Connection URL
const url = 'mongodb://localhost:27017/mongooseDB';

// Database Name
const dbName = 'myproject'

mongoose.Promise = global.Promise
mongoose.connect(url)

module.exports = {
    mongoose
}