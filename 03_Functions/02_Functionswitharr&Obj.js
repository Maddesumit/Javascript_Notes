//Functions with Object and array
//Passing Object in Parameter

let userData={
    name:"Sumit",
    email:"learcode@google.com",
    mobile:"90198272865"
    }
    
    function userDeatail(object){
    
        return `Welcome ${object.name} to our applciation, price is ${object.mobile}`
    }
    console.log(userDeatail(userData)); //share object name
    console.log(userDeatail({           //Directly we can share object completely
        name:"Sumit",
        email:"learcode@google.com",
        mobile:"90198272865"
        }));
    
    /**
    =>When we are passing any object as parameter, then we should give any name to parameter
    =>Name of object should pass as argument
     */
    
    //Passing array in Paramaeter
    
    let array=[200,349,355]
    
    function array1(anyarray){
        return anyarray[2]
    }
    
    console.log(array1(array));
    console.log(array1([200,349,355]));