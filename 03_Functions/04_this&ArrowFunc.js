//This keyword and Arrow Function
const user={
    username: "Sumit",
    price : 999,

        welcomemessage: function(){
    console.log(`${this.username} welcome to the website`);
}
}
//"this" is a keyword which is used to display current value presnt in object.
//In function this keyword cannot be used

// user.welcomemessage();
// user.username="Suman"
// user.welcomemessage();
console.log(this); // When we print "this" in node envirnoment then we get empty object because there is no global object.
// {Interview Question }but when "this" is consoled in brower then global object will be window.

const sumit=function(){
    console.log(this);
}
const sumit1=()=>console.log(this)
 //this keyword cannot be accessed in any function, only in object. Because it is global object

 /*ARROW FUNCTION */

 let name = (num1, num2)=>{
    return num1+num2;
 }
 console.log(name(8,5));

 //Implicit return arrow function-> We dont need to write return keyword
 let sum=(n,m)=>(n+m);
console.log(sum(5,5));

//When {} --> We have to use return
// When ()--> No need to use return

//When wehave to return object in arrow function then we have to write in parenthesis({object})