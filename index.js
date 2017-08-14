const express = require('express');
const path = require('path');
const favicon = require('serve-favicon')
const server = express();

const port = process.env.PORT || 8080;

server.use(favicon(path.join(__dirname, 'public', 'media', 'favicon.ico')))
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(req,res){
 res.sendFile('/html/splash.html',{root:__dirname+'/public'});
});


server.listen(port,function(){
  console.log('Now listening on port '+ port)
})
