var express = require('express');
var app = express();
var fs = require("fs");
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
app.listen(port, host, function() {
    console.log("Server started.......");
  });
  