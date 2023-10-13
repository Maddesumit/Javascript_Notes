//Object decleartion using constructor(new keyword)

const user =new Object()
user.emailId="maddesumit@gmail.com"
user.mobile="9019827207"
user.location="Aland"
user.isLoggedin=false
user.lastLoggedin=["mon", "tues","sat"]

console.log(user)

//Object within object

const regularUser={
    userName:{
        fullname:{
            firstname:"Sumit",
            middlename:"Shashikant",
            lastName:"Madde"
        }
    }
}

console.log(regularUser.userName.fullname.firstname)
console.log(regularUser.userName.fullname.lastName);

//Methods to combine multiple objects in single object

let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}
let obj3={4:"e",5:"f"}

//Method1-: By this method, object will be created within object {Not recommended}
let obj4={obj1,obj2,obj3}
console.log(obj4)

// Method2_: using assign method, in this method it is recommended to add empty object {} at beginning which will act as target and remaining object will act as value
let obj5=Object.assign({},obj1,obj2,obj3)
console.log(obj5);

//Method3-: using spread operator-: Modern ES6 method
let obj6={...obj1,...obj2,...obj3}
console.log(obj6);

//Objects within array 

let userData=[
    {
        id:1,
        name:"Sumit",
        mobile:903383800
    },
    {
        id:2,
        name:"Suman",
        mobile:8937288948
    }
]
console.log(userData[0].name)
console.log(userData[1].mobile);
//----------------
// Object Methods

let userMethod={
    mobile:9019736896,
    name:"Sumit",
    emailId:"madde@gmail.com",
    location:"Karnataka"
}
console.log(Object.keys(userMethod))
console.log(Object.entries(userMethod))
// console.log(userMethod.hasOwnProperty("name"));
console.log(userMethod.hasOwnProperty('name')); //Used to check, wheather particular key is present in Object, especially when data comes from API