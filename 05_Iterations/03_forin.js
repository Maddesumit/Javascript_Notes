let object={
    name:'sumit',
    roll:160
}

for (const key in object) {
   console.log(object[key]);
}
//if we directed console keys then actual key will be printed, to print values of keys you have write object[key]
let arr=['sumit','vaibhav','rishi']
for (const key in arr) {
   console.log(arr[key]);
}

//forof-: Arrays
//forin-: Objects