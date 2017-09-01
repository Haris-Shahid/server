var fs = require('fs') ;
//this code gives some buffer result which means it want some type which is utf-8
// fs.readFile( './data.json' , function(err , data){
//     console.log(data) ;
// });
var data = require( './data.json' ) ; //just another way vry little difference

console.log(data.name) ; //his way help us to access the property like data.name

fs.readFile( './data.json' , 'utf-8' , function(err , data){
    console.log(data) ; //upper style is not working in hre it gives undefined
    // for make it working
    data = JSON.parse(data) ;
    console.log(data.name)
});