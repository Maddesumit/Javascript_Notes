//------------------Operators---------------------//

let value=3;
let newValue=-value;
console.log(newValue);

//Basic arithematic operations

console.log(2+2)
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3) // Power operator
console.log(2%2); //Modulus operator-: Determines remainders

//Using operator in string
let str1="Sumit"
let str2=" Madde"
let str3=str1 + str2;
console.log(str3)

//Confusing operations
let num1="1"+2
console.log(num1)
console.log(typeof num1);

let num2=1+"2"
console.log(num2)
console.log(typeof num2); 

console.log("1" + 2 + 2); // type=String because 1st operand is string
console.log(1 + 2 + "2"); //type = Number because 1st operand is number

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
