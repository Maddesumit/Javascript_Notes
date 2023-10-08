//Number & Maths in Javascript
let score=400;
const balance= new Number(45) // It specifies that given digit is in form number dataType
console.log(balance) 

//Number Property 
//01.tostring-: Convert Number into string

console.log(balance.toString());

//02. tofixed-: this property specifies how many decimal numbers should be displayed

console.log(balance.toFixed(2));

//03. toprecision-: Displays precise value
let newBalance=34.23
console.log(newBalance.toPrecision(3));

//04.toLocale-: Converts number into readable format.
let num=100000000;
console.log(num.toLocaleString('en-IN'));

//----------------MATHS---------------------//

console.log(Math)
console.log(Math.abs(-4)); //Converts any negative value into positive.
console.log(Math.round(4.5));//Roundoff the number according to maths standard
console.log(Math.ceil(4.3)); // Always roundoff the number to the top Number
console.log(Math.floor(4.7)) // roundoff the number to bottom number
console.log(Math.min(3,5,7,3,2,5,1,1)); // finds minimum value
console.log(Math.max(5,6,32,10,3,3,3,567777777777777,44)); // finds maximum values

console.log(Math.random()) //displays random number between 0 & 1
console.log(Math.random()*10) // displays random number between 1 & 10
console.log(Math.floor(Math.random()*10)+1)

// Display random number between min and max value

const min=1;
const max=6;
console.log(Math.floor(Math.random()*(max-min+1))+min) // Important formula 