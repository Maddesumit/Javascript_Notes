//Array
//Initilzation and declearation 
const arr =  [1,2,3,4]
//Data present inside array can be of same datatype or different datatype
const aar1=[1,9,3,5,"Sumit",3]
//Declearation of array using new keyword
const arr3=new Array(1,2,3,"Sumit",4,2,)
// console.log(arr3[0]); // Arrays can be accessed using there index

//Array methods
arr3.push(3) //New element will be pushed in array at last
// console.log(arr3)

arr3.pop()
// console.log(arr3)//Last element from the array will be removed

arr3.unshift(4) //Inserts new element at start of array
// console.log(arr3)

arr3.shift() //Removes first element from the array
// console.log(arr3) 

// console.log(arr3.includes(8)) //Checks wheather element is included in array
//retuen in Boolean 

// console.log(arr3.indexOf("Sumit")) // Return the index

// const newArr=arr3.join() //Convert all arrays into strings
// console.log(newArr);

//Slice and Splice

const newArray=[1,2,3,4,5,6,7,8,9]

console.log(newArray.slice(1,4)) // 1,4 are index of array
//Returns the values of mentioned indexies,but last element of index will be excluded.
console.log(newArray) //There will be no change in array when slice is used.

console.log(newArray.splice(1,4)) // Are mentioned elemets will be printed
//Splice-: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(newArray)
//{Important}=> After "splice" the element from the array will be removed

/*
When we want to display some elements from array using indexies(Elements will be not be deleted) --> Slice

When we want to delete some eleemts from array then we shuld use-->splice
After using splice elemtns fromarray will be deleted.
*/