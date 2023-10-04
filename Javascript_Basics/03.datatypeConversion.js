// String to Number Conversion
//Case 01 
let score="33"
let scoreinNumber=Number(score);
console.log(scoreinNumber);
console.log(typeof scoreinNumber); 
//Case 02
let score1="33abs" //Numberwithalphabets associated 
let scoreinNumber1=Number(score);
console.log(scoreinNumber1);
console.log(typeof scoreinNumber1); 

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

/*Observations 
"Sumit"=>String to Boolean=> true
""=>Empty String to boolean ==> false
1=> true
0=>false

*/
