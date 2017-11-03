var mysql = require('mysql');
var express = require('express');
var app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (name, job) VALUES ('b2', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.post('/', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
    // Neat!
  });
  res.end('Success');
});

app.get('/login', function(req, res) {
  // Get sent data.
console.log("got");

});

app.listen(8000, function() {
  console.log('Example app listening on port 3000!');
});
