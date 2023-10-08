//with JavaScript, methods and properties are also available to strings, because JavaScript treats strings as objects when executing methods and properties.

//01 String concatenation-: USing string interpolation method(Backtits)
let name ="Sumit"
let git="git/maddesumit.com"

console.log(`My name is ${name} and my github link is ${git}`)
// console.log(typeof String);

let str=new String("Sumit") //Another way to declare and intilize string 
console.log(str)

//String PRoperty- Only 1 string property 
/* 01 String Length-: It is used to find the of string
   -> String length is not a function it is a property of string
*/
let Str="Sumit madde"
console.log(Str.length)

//String Methods
//01. CharAt-: Displays which character is present at given index. {Note_: index starts from 0}
let strq="Sumit"
console.log(strq.charAt(4))

let ste2="vaibhav Kulkarni"
console.log(ste2.charAt(9));

//02. charCodeAt-: Represent particular unicode value of the alphabet, of particular given index
let char="CodewithDumit"
console.log(char.charCodeAt(0));
console.log(char.charCodeAt(8));

//03.codePointAt-: Represents code point according to UTF 16

let char1="CodewithSumit"
console.log(char.codePointAt(0))

//04. String concat()

let str1='sumit'
let str2='madde'

console.log(str1.concat(str2));

//05. Endswith-

const email="maddesumit@gmail.com"
console.log(email.endsWith(".com",20))

//06. fromcharCode-: zProvide character according to unicode

console.log(String.fromCharCode(43,64,65,66,67, 68, 77));

//07. fromcodePoint
console.log(String.fromCodePoint(23,56,66,67,89,345,755,23454,455*77));

//08. Includes
let emailid="maddesumit@gmail.com"
console.log(emailid.includes("@"));

