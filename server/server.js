var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = process.env.PORT || 3000;
var tasks = require('./routes/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.use('/tasks',tasks);

// listen for requests on a specific port
app.listen(port, function(){
    console.log("listening on port:", port);
});