const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//01. Push-: Insert array within array
// marvel_heros.push(dc_heros) // Using push method, it will insert new array in existing array
console.log(marvel_heros)

//02.Concat
const newHeros= marvel_heros.concat(dc_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(newHeros);

//Instead of concat method, we can use spread operator, to combine arrays, using spread operator we can combine as many as array
//03.Spread
const all_heros=[...marvel_heros, ...dc_heros]
console.log(all_heros) //Same output as of concat

//If there are many arrays within arrays-> We can use method known as flat-->Combine nested array into songle array
const anotherArray=[1,2,3,[3,4,5,[4,5,6,7,[4,6,7,8,4]]]]

//04.Flat
const real_another_array=anotherArray.flat(Infinity) /*Here we have to provide depth but we can use infinity */
console.log(real_another_array);

//06. isArray
console.log(Array.isArray([1,4,5,6])) //The Array.isArray() static method determines whether the passed value is an Array.

//07.from
console.log(Array.from("1235"));// Creates an array from an iterable object.An iterable object to convert to an array.

//08. Map-> We can pass a callback function as arguument
const num=[1,2,3,4,5]
console.log(num.map((x)=>x*2));

//09. Filter-> We can pass a call back function as argument 
const names=["sumit", "madde", 'suman']
console.log(names.filter((word=>word.length>3)))