//Foreach is a array loopsmethod and only applicable on arrays

let coding=["js", "ruby", "java", "python", "cpp"]
coding.forEach((item)=>{
    // console.log(item);
})
//item is varible which is used to access the elements of arrays, variable name can be anything

//forEach has a access to the values, index and each each value has access to complete array
coding.forEach((value,index,array)=>{
    // console.log(value,index,array);
})

//Objects within array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((value)=>{
    // console.log(value.languageName);
})

//Foreach method doesn't return anything
const values = coding.forEach( (item) => {
    // console.log(item);
    return item
} )
console.log(values);