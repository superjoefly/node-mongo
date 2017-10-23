// Creating Databases

// var MongoClient = require('mongodb').MongoClient;
//
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   console.log("Database Created!");
//   db.close();
// });


//////////////////


// Creating Collections (tables)

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.createCollection("customers", function(err, res) {
//     if(err) throw err;
//     console.log("Collection Created!");
//     db.close();
//   });
// });


///////////////////


// Inserting Documents (records) to Database

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  var myObj = {name: 'My Company', address: 'Boulder CO'};
  db.collection('customers').insertOne(myObj, function(err, res) {
    if(err) throw err;
    console.log('Document Inserted!');
    db.close();
  });
});
