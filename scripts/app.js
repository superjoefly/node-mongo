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

// // The insertOne() Method
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var myObj = {name: 'My Company', address: 'Boulder CO'};
//   db.collection('customers').insertOne(myObj, function(err, res) {
//     if(err) throw err;
//     console.log('Document Inserted!');
//     db.close();
//   });
// });
//
// // Result: 'Document Inserted!'


// // The insertMany() method
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var myObj = [
//     {name: 'Jason', address: '2322 Up St'},
//     {name: 'Brian', address: '1289 Down St'},
//     {name: 'Rebecca', address: '226 Left St'},
//     {name: 'T-Bone', address: '333 Right St'},
//     {name: 'Sasquach', address: '456 Middle St'}
//   ];
//   db.collection('customers').insertMany(myObj, function(err, res) {
//     if(err) throw err;
//     console.log(res.insertedCount + ' Documents Inserted!');
//     db.close();
//   });
// });
//
// // Result: 5 Documents Inserted!



// The _id Field

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  var myObj = [
    {_id: 1, name: 'Race Car'},
    {_id: 2, name: 'Barby Doll'},
    {_id: 3, name: 'He-Man'}
  ];
  db.collection('products').insertMany(myObj, function(err, res) {
    if(err) throw err;
    console.log(res);
    db.close();
  });
});

// Result:
// { result: { ok: 1, n: 3 },
//   ops:
//    [ { _id: 1, name: 'Race Car' },
//      { _id: 2, name: 'Barby Doll' },
//      { _id: 3, name: 'He-Man' } ],
//   insertedCount: 3,
//   insertedIds: [ 1, 2, 3 ] }
