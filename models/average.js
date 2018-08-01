
// model/comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const AverageSchema = new Schema({
  studentId: String,
  firstName: String,
  lastName: String,
  studentAverage: String,
  chapter1Test: String,
  chapter2Test: String,
  chapter3Test: String,
  chapter4Test: String,
  chapter5Test: String,
  chapter6Test: String,
  chapter7Test: String,
  chapter8Test: String,
  chapter9Test: String,
  chapter10Test: String,
}, { timestamps: true });

// export our module to use in server.js
module.exports = mongoose.model('Average', AverageSchema);