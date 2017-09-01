var fs = require('fs') ;

//this way not gives us the result we want
// var intro = {
//     name : 'Haris' ,
//     pofession :'developer'
//  } ;

var intro = '{"name" : "Haris" ,"pofession" :"developer" }' ;

fs.writeFile('haris.json' , intro );

//another way to do that

var harisIntro = {
    name : 'Haris' ,
    pofession :'developer'
 }

fs.writeFile('haris1.json' , JSON.stringify(harisIntro))