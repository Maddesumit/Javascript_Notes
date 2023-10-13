//Array
//Initilzation and declearation 
const arr =  [1,2,3,4]
//Data present inside array can be of same datatype or different datatype
const aar1=[1,9,3,5,"Sumit",3]
//Declearation of array using new keyword
const arr3=new Array(1,2,3,"Sumit",4,2,)
console.log(arr3[0]); // Arrays can be accessed using there index

//Array methods
arr3.push(3) //New element will be pushed in array at last
console.log(arr3)

arr3.pop()
console.log(arr3)//Last element from the array will be removed

arr3.unshift(4) //Inserts new element at start of array
console.log(arr3)

arr3.shift() //Removes first element from the array
console.log(arr3) 

console.log(arr3.includes(8)) //Checks wheather element is included in array
//retuen in Boolean 

console.log(arr3.indexOf("Sumit")) // Return the index

const newArr=arr3.join() //Convert all arrays into strings
console.log(newArr);

//Slice and Splice

const newArray=[1,2,3,4,5,6,7,8,9]

console.log(newArray.slice(1,4)) // 1,4 are index of array
// In slice  last element is excluded
console.log(newArray)

console.log(newArray.splice(1,4)) // Are mentioned elemets will be printed
console.log(newArray)
//{Important}=> After "splice" the element from the array will be removed
