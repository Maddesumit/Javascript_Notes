//Map-: Array Method,which is used to perform operation with each element of array at a time.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums= myNumers.map((num)=>num*2).map((num)=>num*5)
// console.log(newNums);

//Chaining-: Applying multiple method a array at a time.

const newnum= myNumers.map((num)=>num*2)    
                      .map((num)=>num*5)
                      .filter((num)=>num>=50)
console.log(newNums);
console.log(newnum);