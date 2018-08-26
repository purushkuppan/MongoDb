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


  /* db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5b823a3b8a5600495cda0ae9')},{$set: { text : 'text', completed : false}}, {
       returnOriginal : true
    }

   ).then((result) => {
        console.log(result)
        // console.log(`result :`, JSON.stringify(result, undefined,2))
    }, (err) => {
       console.log(`unable to load data`, err)
   })
*/
    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5b82407e3950cc0e34af1103')},
        {$inc: {name : "Purush", age : 10}}, {
            returnOriginal : true
        }

    ).then((result) => {
        console.log(result)
        // console.log(`result :`, JSON.stringify(result, undefined,2))
    }, (err) => {
        console.log(`unable to load data`, err)
    })

  //  client.close();

});