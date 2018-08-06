
// model/grade.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const ExamSchema = new Schema({
  _id: Schema.Types.ObjectId,
  examId: String,
  examName: String,
  examDate: String,
}, { timestamps: true });

// export our module to use in server.js
module.exports = mongoose.model('Exam', ExamSchema);
