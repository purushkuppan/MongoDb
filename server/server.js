const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db/db')
const {User} = require('./users')
const {Todo} = require('./todo')

var app = express();

app.use(bodyParser.json())
app.post('/todo', (req, res) => {

    var todo = new Todo({ text : req.body.text})

    todo.save().then((result)=> {
        res.send(result)
    }, (e) => {
        res.status(400).send(e);
    })

})

app.post('/user', (req, res) => {

    var user = new User({ name : req.body.text, email : req.body.email })

    user.save().then((result)=> {
        res.send(result)
    }, (e) => {
        res.status(400).send(e);
    })

})

app.listen(4000, () =>{
    console.log('App started')
})

module.exports = {
    app
}