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

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var myObj = [
//     {_id: 1, name: 'Race Car'},
//     {_id: 2, name: 'Barby Doll'},
//     {_id: 3, name: 'He-Man'}
//   ];
//   db.collection('products').insertMany(myObj, function(err, res) {
//     if(err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// Result:
// { result: { ok: 1, n: 3 },
//   ops:
//    [ { _id: 1, name: 'Race Car' },
//      { _id: 2, name: 'Barby Doll' },
//      { _id: 3, name: 'He-Man' } ],
//   insertedCount: 3,
//   insertedIds: [ 1, 2, 3 ] }



//////////////////


// The findOne() Method

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').findOne({}, function(err, result) {
//     if(err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
//
// // Result: My Company


// The find() Method

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').find({}).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result:
    // [ { _id: 59ee477f406931606fb2a004,
    // name: 'My Company',
    // address: 'Boulder CO' },
    // { _id: 59ee910440030506aa61d274,
    // name: 'Jason',
    // address: '2322 Up St' },
    // { _id: 59ee910440030506aa61d275,
    // name: 'Brian',
    // address: '1289 Down St' },
    // { _id: 59ee910440030506aa61d276,
    // name: 'Rebecca',
    // address: '226 Left St' },
    // { _id: 59ee910440030506aa61d277,
    //
    // name: 'T-Bone',
    // address: '333 Right St' },
    // { _id: 59ee910440030506aa61d278,
    // name: 'Sasquach',
    // address: '456 Middle St' } ]


// Find Some

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').find({}, {
//     _id: false, name: true, address: true
//   }).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result:
    // [ { name: 'My Company', address: 'Boulder CO' },
    // { name: 'Jason', address: '2322 Up St' },
    // { name: 'Brian', address: '1289 Down St' },
    // { name: 'Rebecca', address: '226 Left St' },
    // { name: 'T-Bone', address: '333 Right St' },
    // { name: 'Sasquach', address: '456 Middle St' } ]



// Accessng Properties of an Object

// Access Address Property of Third Object
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').find({}, {
//     _id: false, name: true, address: true
//   }).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result[3].address);
//     db.close();
//   });
// });

// Result: 226 Left St

// Access Name Property of Second Object
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').find({}, {
//     _id: false, name: true, address: true
//   }).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result[2].name);
//     db.close();
//   });
// });

// Result: Brian



///////////////////


// Query Objects

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = {address: '226 Left St'};
//   db.collection('customers').find(query).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result:
    // [ { _id: 59ee910440030506aa61d276,
    // name: 'Rebecca',
    // address: '226 Left St' } ]



// Using Regular Expression as Query

// // Retrieve all Addresses that start with letter B
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { address: /^B/ };
//   db.collection('customers').find(query).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result
    // [ { _id: 59ee477f406931606fb2a004,
    //     name: 'My Company',
    //     address: 'Boulder CO' } ]



////////////////////


// Sort Method

// Ascending Order {name: 1}

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var mysort = { name: 1 };
//   db.collection('customers').find().sort(mysort).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result:
    // [ { _id: 59ee910440030506aa61d275,
    //     name: 'Brian',
    //     address: '1289 Down St' },
    //   { _id: 59ee910440030506aa61d274,
    //     name: 'Jason',
    //     address: '2322 Up St' },
    //   { _id: 59ee477f406931606fb2a004,
    //     name: 'My Company',
    //     address: 'Boulder CO' },
    //   { _id: 59ee910440030506aa61d276,
    //     name: 'Rebecca',
    //     address: '226 Left St' },
    //   { _id: 59ee910440030506aa61d278,
    //     name: 'Sasquach',
    //     address: '456 Middle St' },
    //   { _id: 59ee910440030506aa61d277,
    //     name: 'T-Bone',
    //     address: '333 Right St' } ]


// Descending Order {name: -1}

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var mysort = { name: -1 };
//   db.collection('customers').find().sort(mysort).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Result:
    // [ { _id: 59ee910440030506aa61d277,
    //     name: 'T-Bone',
    //     address: '333 Right St' },
    //   { _id: 59ee910440030506aa61d278,
    //     name: 'Sasquach',
    //     address: '456 Middle St' },
    //   { _id: 59ee910440030506aa61d276,
    //     name: 'Rebecca',
    //     address: '226 Left St' },
    //   { _id: 59ee477f406931606fb2a004,
    //     name: 'My Company',
    //
    //     address: 'Boulder CO' },
    //   { _id: 59ee910440030506aa61d274,
    //     name: 'Jason',
    //     address: '2322 Up St' },
    //   { _id: 59ee910440030506aa61d275,
    //     name: 'Brian',
    //     address: '1289 Down St' } ]



/////////////////////

// Deleting Documents

// // deleteOne() Method
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { address: '1289 Down St' };
//   db.collection('customers').deleteOne(query, function(err, obj) {
//     if (err) throw err;
//     console.log('Document Deleted!');
//     db.close();
//   });
// });
//
// // Result: Document Deleted!




// // deleteMany() Method
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { address: /^2/ };
//   db.collection('customers').deleteMany(query, function(err, obj) {
//     if(err) throw err;
//     console.log(obj.result.n + ' Document(s) Deleted!');
//     db.close();
//   });
// });
//
// // Result: 2 Document(s) Deleted!



// Drop Collections

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  db.collection('customers').drop(function(err, delOK) {
    if(err) throw err;
    if(delOK) console.log('Collection Dropped Successfully!');
    db.close();
  });
});

// Result: Connection Dropped Successfully!
