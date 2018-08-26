// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if (err) {
        return console.log("Unable to connect DB");
    }
    console.log("Connected successfully to server");

    const db = client.db(dbName);

 /*   db.collection('Todos').insertOne({
        text: 'something need to do',
        completed: false

    }, (err, result) => {
        if (err) {
            return console.log("Unable to connect DB");
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })*/

    db.collection('Users').insertOne({

        name: 'Purush',
        course: ['React', 'Node'],
        age : 29,
        email: 'purush.kuppan@gmail.com'

    }, (err, result) => {
        if (err) {
            return console.log("Unable to connect DB");
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    })

    client.close();

});