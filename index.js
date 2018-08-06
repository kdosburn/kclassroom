const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Average = require('./models/average');
const Exam = require('./models/exam');
const secrets = require('./secrets');

const app = express();
const router = express.Router();

mongoose.connect(secrets['dbUri']);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/averages', (req, res) => {
  Average.find((err, average) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: average });
  }).sort('studentId');
});

router.get('/exams', (req, res) => {
  Exam.find((err, exam) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: exam });
  }).sort('exam_id');
});

const port = process.env.PORT || 5000;

app.use('/api', router);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port);
console.log(`Listening on ${port}`);
