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



// // Drop Collections
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').drop(function(err, delOK) {
//     if(err) throw err;
//     if(delOK) console.log('Collection Dropped Successfully!');
//     db.close();
//   });
// });
//
// // Result: Connection Dropped Successfully!



/////////////////////

// Updating Documents

// // Update a Single Document in Collection
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { address: '1289 Down St' };
//   var newValues = { name: 'Brian', address: '1387 Up St' };
//   db.collection('customers').updateOne(query, newValues, function(err, res) {
//     if(err) throw err;
//     console.log('Document Updated Successfully!');
//     db.close();
//   });
// });
//
// // Result: Document Updated Successfully!


// // Update ONLY Specific Fields ($set)
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { address: '1289 Down St' };
//
//   var newValues = {$set:
//     { address: '1387 Up St' }
//   };
//
//   db.collection('customers').updateOne(query, newValues, function(err, res) {
//     if(err) throw err;
//     console.log('Document Updated Successfully!');
//     db.close();
//   });
// });
//
// // Result: Document Updated Successfully!


// // Update Many Documents
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var query = { name: /^J/ };
//
//   var newValues = {$set:
//     { name: 'Jerry' }
//   };
//
//   db.collection('customers').updateMany(query, newValues, function(err, obj) {
//     if(err) throw err;
//     console.log(obj.result.nModified + ' Document(s) Updated!');
//     db.close();
//   });
// });
//
// // Result: 1 Document(s) Updated!



///////////////



// The limit() Method

// Limiting Number of Results

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost:27017/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('customers').find().limit(3).toArray(function(err, result) {
//     if(err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
//
// // Result:
//     // [ { _id: 59f0eeab9afe516528926fb3,
//     // name: 'Jerry',
//     // address: '2322 Up St' },
//     // { _id: 59f0eeab9afe516528926fb4,
//     // name: 'Brian',
//     // address: '1387 Up St' },
//     // { _id: 59f0eeab9afe516528926fb5,
//     // name: 'Rebecca',
//     // address: '226 Left St' } ]


//////////////


// Joining Databases with $lookup Stage

// Note: we already have a products collection that was created in the 'Insert Section'

// // Create collection for 'orders'
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
//
// // Orders Creation and Insertion
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   var myObj = [
//     {_id: 1, product_id: 123, status: 3}
//   ];
//   db.collection('orders').insertMany(myObj, function(err, res) {
//     if(err) throw err;
//     console.log('Orders Collection Created and Data Inserted!');
//     db.close();
//   });
// });

// Result: Orders Collection Created and Data Inserted!


// // Join 'order' with product_id: 2 TO 'product' with _id: 2
//
// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/mydb';
//
// MongoClient.connect(url, function(err, db) {
//   if(err) throw err;
//   db.collection('orders').aggregate([
//     { $lookup:
//       {
//         from: 'products',
//         localField: 'product_id',
//         foreignField: '_id',
//         as: 'order_details'
//       }
//     }
//   ], function(err, res) {
//     if(err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });
//
// // Result:
//   // [{"_id":1,"product_id":2,"status":3,"order_details":[{"_id":2,"name":"Ba
//   // rby Doll"}]}]
