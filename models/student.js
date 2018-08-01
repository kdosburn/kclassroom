
// model/comment.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
  studentId: String,
  firstName: String,
  lastName: String,
}, { timestamps: true });

// export default mongoose.model('Student', StudentsSchema);
module.exports('Student', StudentsSchema);