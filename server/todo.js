const mongoose = require('mongoose')

var Todo = mongoose.model('Todos', {
    text : {
        type : String
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