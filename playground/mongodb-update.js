const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a32af1757da7f788551c1cd")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log( JSON.stringify(res, undefined, 2) );
  // });

  db.collection('Users').findOneAndUpdate({
    _id: 123
  }, {
    $inc : {
      age: 34
    },
    $set: {
      name: 'Stuart Barlow'
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log( JSON.stringify(res, undefined, 2) );
  });

  db.close();
});
