//FUnction Declearation

function myname(){
    console.log("Sumit")
}

myname //Refernce
myname() // Function Call awake the function

function addTwoNumbers(Number1, Number2/*Parameters/*/){
 let result= Number1+Number2;
 return result;
 // Any code after result will not be accepted
}

let result= addTwoNumbers(3,5/*Arguments */)
console.log(result);

function isLoggedin(userName){
    if(userName===undefined){
        console.log("Please Enter Valid User Name");
        return
    }
return`Hello ${userName}, welcome to our application`
}

let user=isLoggedin("Sumit")
console.log(user)

//Rest Operator
function ShoppingCart(...value/*rest operator */){
return value
}

let FinalPrice=ShoppingCart(200,699,567)
console.log(FinalPrice)
