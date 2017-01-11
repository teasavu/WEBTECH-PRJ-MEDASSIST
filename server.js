var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var models  = require('./models');
//var Sequelize = require("sequelize");

// define entity
var Blood_tests = models.Blood_tests;

var app = express();
app.use(bodyParser.json());
app.use(cors());

// REST methods
app.use(require("./routes/blood_tests.js"));
app.use(require("./routes/doctors.js"));

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

// include static files in the admin folder
app.use(express.static('app'));

app.listen(process.env.PORT);


/*var sequelize = new Sequelize('medassist_prj', 'teosavu', '', {
   dialect: 'mysql',
   port: 3306
});

var Test = sequelize.define('blood_tests', {
  test_name: {
    type: Sequelize.STRING,
    field: 'test_name'
  },
  test_value: {
    type: Sequelize.STRING,
    field: 'test_value'
  },
  test_result: {
    type: Sequelize.STRING,
    field: 'test_result'
  },
  id_doctor: {
    type: Sequelize.STRING,
    field: 'id_doctor'
  }
}, {
  tableName: 'blood_tests',
  timestamps: false
});*/





