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

app.get('/user', (req, res) => {

  User.find().then((user) => {
      res.send(user)
  }, (err) => {
      res.status(400).send(e);
  })

})

app.get('/todo', (req, res) => {

    Todo.find().then((todo) => {
        res.send(todo)
    }, (err) => {
        res.status(400).send(e);
    })

})

app.get('/todo/:id', (req, res) => {
var id = req.params.id;
    Todo.find({_id : id}).then((todo) => {
        if(todo.length>0)
        res.send(todo)
        else
            res.status(404).send(todo);
    }, (err) => {
        res.status(400).send(err);
    })

})

app.listen(4000, () =>{
    console.log('App started')
})

module.exports = {
    app
}