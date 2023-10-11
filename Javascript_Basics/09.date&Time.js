//Dates in javascript is a object.

//Initialization

let myDate= new Date()
console.log(myDate); // Date displayed will not be in readliable format
 //String operation on dates
console.log(myDate.toString()); //Displays date in string format with time 
console.log(myDate.toDateString()); //Displays date in string(Simple understandable format)
console.log(myDate.toISOString()); // Displays in ISO format (representation of dates to keep an international standard)
console.log(myDate.toUTCString()); //UTC-: Specific time
console.log(myDate.toJSON());
console.log(myDate.toLocaleString()); //Return date and time according to specific regiom
console.log(myDate.toLocaleDateString()); //Only returns date
console.log(myDate.toTimeString()); //Return time according to india standard time

// Passing arguments on date
let mycreatedDate = new Date(2023, 0 ,13); 
console.log(mycreatedDate)
// We can pass our specific date which we want to return, month and date starts with 0 index
let mycreatedDate1=new Date(2023, 4, 20, 14,5,5) // We can input manual date and time
console.log(mycreatedDate1.toLocaleString());

//Time-: Time from 1st Jan 1970 in milliseconds
let time = Date.now()
console.log(time) // Return time in millisecond from 1st Jan 1970 till now
console.log(mycreatedDate.getTime()) // 
console.log(Math.floor(Date.now()/100)); // Displays time in seconds

let newDate= new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getDay())
console.log(newDate.getDate())
console.log(`Current Date is ${newDate.getDate()}, month is ${newDate.getMonth()+1} `)