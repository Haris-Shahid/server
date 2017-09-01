var express = require('express') ;
var app = express() ;

// for open static website 
app.use(express.static(__dirname)) ;
//setting the port for the browser
app.listen('3000',function(err , res){
    console.log('server start') ;
} )