//IIFE-> immediately involed fucntion expression
/*
IIFE is used when a function should be executed immediately when program/application is started
*/
//Syntax-:

//(function defination)(funtion call)

(function sumit (){
    console.log("Hello");
} )(); //name IIFE

((name)=>{console.log(`${name}`)})("sumit") 

//{Interview Question}-> If we have to excute two iife in same file, then we have to place (semicolean); after first iife