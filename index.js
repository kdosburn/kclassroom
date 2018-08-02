const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const generatePassword = require('password-generator');
const Average = require('./models/average');
const Student = require('./models/student');
const secrets = require('./secrets');

const app = express();
const router = express.Router();

mongoose.connect(secrets['dbUri']);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/averages', (req, res) => {
  Average.find((err, average) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: average });
  }).sort('studentId');
});

// app.get(('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '/client/build', 'index.html'));
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 5000;

app.use('/api', router);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

app.listen(port);
console.log(`Listening on ${port}`);
