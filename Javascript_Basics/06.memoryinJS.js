/*Memory in Javascript
1)Stack-: Primitive Datatype use Stack Memory
-> In stack, user doesnt get original value, they get copy of the value.,
-> Any changes made will not reflect in original value.
-> Call by value */
//Example-: 

let name1="Sumit";
let name2=name1; //Copy of name 1 is provided, anychanges will not reflect in original value
console.log(name1,name2)
name2="Madde"   
console.log(name1,name2)
/*2)Heap-: Non Primitive(Reference) Datatypes uses Heap Memory
-> In heap, user get refernce i.e., original value, 
-> changes made will reflect in original value
-> Call by reference.
*/
let user1={
    email:"maddesumit@gmail.com",
    name:"Sumit",
    mobile:9019827207
}
let user2=user1;
user2.email="sumit@gmail.com"
console.log(user1.email) // Here we changed email of 2nd user, but 1st users email also changed