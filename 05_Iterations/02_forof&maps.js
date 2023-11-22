let number=[1,2,3,45,5]
//Syntax of for-of Loop
// for (const iterator of object) {
    //iterator-:Iterator is a Variable which is defined during loop or iteration..
    //object-: object it may be string, array, number or object,which must be defined above..
// }

for (const num of number) {
    console.log(num)
}

const greeting="Hello, welcome to our application";

for (const greet of greeting) {
    console.log(greet);
    
}

//Map--> The Map object holds key-value pairs and remembers the original insertion order of the keys. 

let map=new Map();
map.set('IN','INDIA');
map.set('USA','United State of India');
map.set(23,44)
map.set('IN','INDIA');

console.log(map);
//Applying forof for Maps

for (const list of map) {
    console.log(list);
}
//If we apply direct forof then it will return array

for (const [keys,value] /*Array destructing*/ of map) {
    console.log(keys,'-:',value)
}

let mygame={
    game1:'freefire',
    game2:'GTA 5'
}
 //Object is not iterable using forof
// for (const game of mygame) {
//     console.log(game);
// }
//We can iterate map using forof but not object

let arr=['sumit','vaibhav','rishi']
for (const array of arr) {
    console.log(array);
}