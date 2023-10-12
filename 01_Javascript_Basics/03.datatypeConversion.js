// String to Number Conversion
//Case 01 
let score="33"
let scoreinNumber=Number(score);
console.log(scoreinNumber);
console.log(typeof scoreinNumber); 
//Case 02
let score1="33abs" //Number with alphabets associated 
let scoreinNumber1=Number(score1);
console.log(scoreinNumber1); //Value will be NaN
console.log(typeof scoreinNumber1);  // will be converted in Number, 

//Keypoints or observations
/*
"33"=> 33
"33abc"=>NaN {if number is not present in string or any alphabet is associated with number then it will display NaN}
true=> 1; false=>0
*/

// String to boolean conversion
let isloggedin="Sumit"
let boolean=Boolean(isloggedin)
console.log(boolean);

let isloggedin1=""//Empty String
let boolean1=Boolean(isloggedin1)
console.log(boolean1)

let isloggedin2=1
let boolean2=Boolean(isloggedin2)
console.log(boolean2)

let isloggedin3=0
let boolean3=Boolean(isloggedin3)
console.log(boolean3)
/*Observations 
"Sumit"=>String to Boolean=> true
""=>Empty String to boolean ==> false
1=> true
0=>false*/

//Number to String
let someNumber=33
let string1=String(someNumber)
console.log(string1)
console.log(typeof string1) //"33"

