const { ObjectID } = require('mongodb');

var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');

// var id = '5a32dfb61478fd17b18f64fd__';

// if ( !ObjectID.isValid(id) ) {
//   return console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID: ', todo);
// }).catch((err) => {
//   console.log( err );
// });

var id = '5a32c7a858989bf3a4458345';

User.findById(id)
  .then((user) => {
    if (!user) {
      return console.log('User not found!');
    }
    console.log('User:', JSON.stringify(user, undefined, 2));
  })
  .catch((err) => {
    console.log(err);
  });
