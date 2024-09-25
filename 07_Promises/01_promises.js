// Synchrous  task -: Exectute line by line or in sync 
let a=10;
let b=20;
let result=a+b;
console.log(result)

//Async task-: There will be few task which will return after some time.
//For Example-: fetching data from json/server, or reading a file . theseare task will take some time to execute.
//These async task return promise

// let resultFromServer= await fetch
// ("https://jsonplaceholder.typicode.com/posts")

// console.log(resultFromServer) //Returning Promise { <pending> } in console
//Promise-:  it may resolve or reject
//Now as we are getting  <pending>, now what if we want the result of promises, so for that we apply await to promises, so it will wait till promise is resolved

//Await-: await can be applied in the async funtions only , now what are async function, functions with async keyword, and having any task in that function which is async
//For example-; fetch()is a sync task

//if we assign async keyword, then we can to js, dont run this function with main thread,run it on another thread
// async function getData(){
//     let resultFromServer= await fetch
// ("https://jsonplaceholder.typicode.com/posts")
// // console.log(resultFromServer)
// console.log(await resultFromServer.json)
// }
// getData()

fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{console.log(data)}).catch((error)=>{console.log(error)}).finally(()=>{console.log('Executed Successfully')})

//.then-: if everything executes properly then it gone on .then.
//.catch -: if there is erro, then that error will be catched in .catch
//.finally-: Even it has error or executed properly, .finally will execute everytime