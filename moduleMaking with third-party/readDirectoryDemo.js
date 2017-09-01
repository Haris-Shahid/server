var fs = require('fs') ;
//for reading diectory
fs.readdir('c:/' , function(err ,data){
    console.log(data) ;
}) ;