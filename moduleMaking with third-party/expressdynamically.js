var express = require('express') ;
var fs =require('fs') ;
var app = express() ;

app.use('/message' , function(req , res){
    console.log('message requested') ;
    res.send('hello');
}) ;

app.use('/users' , function(req , res){
    console.log('user requested') ;
    fs.readFile( './data.json' , 'utf-8' , function(err , data){
        res.send(data);
    });
}) ;


app.listen(3000 , function(err , res){
    console.log ('server start') ;
})