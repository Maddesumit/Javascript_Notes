
//In javascript datatypes are defined in 2 categories
/*
01.Primitive Datatypes-: 7 types : String, Number, Booleen, null, undefined, Symbol, BigInt
{Primitive are known as call by value datatypes}

02.Non primitive or refernce Datatypes-:3 Types : Array, Objects, Functions
{Non primitive are known as call by refernece datatype}
 */
//01. Number Datatype ,, 
let age=18; //which stores number of range 2^53.


//02. String Datatype
let name="sumit" //used to store string, written in single or double quotes


//03.Boolean data type
let loggedin=false // true or false 


//04.Null data type
let marks=null 
/* null is a data type in JS, which acts as stand alone value.
 {type of null is object}*/
console.log(typeof null) // output is object.

//05. Undefined Data type
let state; // if value is not assigned then it acts as undefined data type
console.log(typeof undefined) // output is undefined

//06. Symbol datatype
//Used to add uniqueness, mostly used in react and other frontend liberaies
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id);

//07. bigInt
let bigInt=373646487356896589638095678347309270735570956025n;
console.log(typeof bigInt);


//Reference or Non Primitive Datatypes
// Array, Objects, Functions
//Array
let heros =["marvel", "shaktiman", "dogi"]

//Object
let object={
    name:"sumit",
    email:"maddesumit@gmail.com",
    mobile:9019827207
}
//Functions
let myfunction= function(){
}
// https://262.ecma-international.org/5.1/#sec-11.4.3

"use strict"; //Use to treat all JS code in newer version