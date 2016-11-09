var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Server is listening on port: " + app.get('port'));
});
