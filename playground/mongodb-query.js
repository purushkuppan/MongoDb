const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/db')
const {User} = require('./../server/users')
const {Todo} = require('./../server/todo')


var id = "9b839770fbc04f2674d83ff3"

var id1 = "5b82529507bdd61434ff1525"

if (!ObjectID.isValid(id))
    console.log("enter valid id")

/*Todo.find({
    _id : id
}).then((result) => {
    console.log(result)
}, (err) => {
    console.log(err)
})

Todo.findOne({
    _id : id
}).then((result) => {
    console.log(result)
}).catch((e) => console.log(e))

Todo.findById(id).then((result) => {
    console.log(result)
}).catch((e) => console.log(e))*/

User.findById(id1).then((result) => {
    console.log(result)
}).catch((e) => console.log(e))