fs= require( 'fs' ) ;
function func( err , data){
    console.log('data : ' , data) ;
}
fs.readdir('c:/' , func ) ;
console.log('this comes after') ;