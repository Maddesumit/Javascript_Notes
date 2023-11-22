for (let i = 0; i < 10; i++) {
    const element = i
    // console.log(element);
}

for(let i=1;i<10;i++){
    const element=i;
    if(element==5){
        // console.log("Five")
    }
// console.log(element);
}
for (let i = 1; i <=10; i++) {
    // console.log(`Multiple of ${i} is`);
    for(let j=1;j<=10;j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

//Continue and Break Statement
/*
Continue-: Conditional Staements
Break-: Exit from  Loop

 */
for (let i = 0; i <20; i++) {
    const element = i;
    if(element==8){
        // console.log("Eight Detected")
        break
    }
    // console.log(element)
}
for (let i = 0; i <20; i++) {
    const element = i;
    if(element==8){
        console.log("Eight Detected")
        continue
    }
    console.log(element)
}