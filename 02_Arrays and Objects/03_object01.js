// There are two ways to decleare objects.,
// 1- Using Constructor-> When object is decleared using constructor then the object is --> Singleton object
// object.create
// 2-> Object declearation and initilization Using literals 

const user={
    name: "Sumit",
    mobile: 9019827207,
    emailId:"Maddesumit@gmail.com",
    isLoggedin:false,
    location: "Karnataka",
    isLoggedin:false,
    lastLoggedin:["mon","tues","Sun"]
}

// In above object, name is a key and "Sumit" is a value
//So object can be accesed using key or value
//In backend "key" is converted into string, so when we access the object using key then we should treat key as string

// Object can be accessed using two ways
//01. Using dot operator
//02. Using Sqaure Brackets

console.log(user.emailId);
console.log(user.mobile)
console.log(user["mobile"]) 
console.log(user["name"]);

/*
Interview Questions-: Convert symbol into object key
 */

let mySym= Symbol("Key1")
let user1={
    // mySym:"Key1", //Wrong way to convert symbol into object key
    [mySym]:"key1"   //Symbol can be used as key using [].
}

// console.log(user1.mySym) // Symbol in object cannot be called using dot operator
console.log(user1[mySym]) //Symbol can be accessed using square brackets
console.log(user1)

user.greeting= function(){
    console.log(`Hello ${this.name}, Welcome to our application`);
}

console.log(user.greeting())