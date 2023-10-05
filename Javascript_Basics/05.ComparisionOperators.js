//Basic Comparsion Operators
console.log(2 > 1); //greater than
console.log(2 >= 1); //greater than or equal to
console.log(2 < 1); //less than
console.log(2 == 1); //Equal to
console.log(2 != 1); // Not Equal to

//Comparison operators when datatype are different

console.log("2">1); 
console.log("1"==1);
console.log("1"!=1);

// In javascript when operand datatype is different then too it will treat both opernad of same datatype

//Null vs Zero
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//Undefined vs zero
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === "Strict opertor"
//If datatype of both operand is same then itself it will display accurate result

console.log("2" === 2);