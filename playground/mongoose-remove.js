const { ObjectID } = require('mongodb');

var { mongoose } = require('./../server/db/mongoose');
var { Todo } = require('./../server/models/todo');
var { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({ text: 'some text' }).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5a422041eaa39495c48b763d').then((todo) => {
  console.log(todo);
});
