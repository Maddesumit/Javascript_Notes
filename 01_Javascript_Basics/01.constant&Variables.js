// Variable are the memory space where certain values are stored using const and let keyword;

const accountId="234455" 
// Once value assigned to const, it cannot be changed

let accountEmail="sumit@google.com"
//Value assigned to "let" keyword, can be changed further

var accountPassword="12344"
//"var" keyword is not used, due to block scope and function scope

accountCity="Gulbarga"
//Values can be assigned to variable without any keyword, {not prefered}

let accountState;
//if value is not assigned to javascript then it displays undefined

console.table([accountId,accountEmail,accountPassword,accountCity])
