/*
 * app.js
*/

'use strict';

var
 http = require('http'),
 express = require('express'),
 
 app = express(),
 server = createServer(app);


app.get('/', function(request, response){
    response.send('Hello Express');
});

server.listen(3000);