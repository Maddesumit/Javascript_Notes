// if(condition){
// //Excetue , when above condtion is true
// }
// else{
// //if condition is not true then else part will exectue
// }

//Conditional Operator-: <, >, <=, >=, ==, !=, ===, !==
//Logical Operator-: &&(All conditions must be true ), ||(If any one condtion is true)
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}