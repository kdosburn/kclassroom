
// model/comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const StudentsSchema = new Schema({
  studentId: String,
  firstName: String,
  lastName: String,
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Student', StudentsSchema);