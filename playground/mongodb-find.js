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

   /* db.collection('Todos').find({completed : true}).toArray().then((result) => {
        console.log(`result :`, JSON.stringify(result, undefined,2))
    }, (err) => {
        console.log(`unable to load data`)
    })*/

    db.collection('Users').find({_id: new ObjectID('5b7e54be1e5df31f7c0cdd3c')}).toArray().then((result) => {
        console.log(`result :`, JSON.stringify(result, undefined,2))
    }, (err) => {
        console.log(`unable to load data`)
    })

  //  client.close();

});