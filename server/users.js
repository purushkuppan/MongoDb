const mongoose = require('mongoose')

var User = mongoose.model('Users', {
    name : {
        type : String, required : true, trim : true,
        default : 'Purush'
    },
    age : {
        type : Number, required: true, default: 29
    },
    email : {
        type : String, minLength: 1, required: true, trim : true
    }
})

module.exports = {
    User
}