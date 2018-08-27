const mongoose = require('mongoose')

var Todo = mongoose.model('Todos', {
    text : {
        type : String,
        required: true
    },
    completed : {
        type : Boolean
    },
    completedAt : {
        type : Number
    }
})

module.exports = {
    Todo
}