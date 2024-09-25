//***1) getElementById
document.getElementById('title')
document.getElementById('title').title
document.getElementById('title').className
document.getElementById('title').getAttribute('class')
document.getElementById('title').getAttribute('id')// pass key, it will returmn value
document.getElementById('title').setAttribute('class','test') //Overwrite the class with test
document.getElementById('title').setAttribute('class','text heading') //No overwrite
// Storing in variable
let title=document.getElementById('title');
title.style.backgroundColor='green'
title.style.padding='15px'
title.style.borderRadius='25px'
//taking content from id-> 3 ways
/* i) */title.textContent  //-> display all content present even it is hided by css property or display property
/* ii) */title.innerText //->displays all the cotent that is visible on screen
/* iii) */ title.innerHTML //-> If HTML is wriiten in content then it will be returned
// textContent and innerText doesnt support HTML , but innerHTML Supports it

//***2)QuerySelectors
document.querySelector('h1') //Return first h1 present in the page
//all css selectors works in queryselector
//to access class and id using queryselector we use css selector itself, # for id, . for class
document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('input[type="password"]')

//****3)QuerySelectorAll
//Whenever we are using querySelectorAll, it will return a NodeList.
const tempLilist=document.querySelectorAll('ol'); //Return nodelist
//NodeList- 
//Supports-: foreach. (to check looping supports, go to prototype)
//NOTE-: Nodelist is like a array, but not an array.
tempLilist.style.backgroundColor='green' //error
//Whenever we are getting/taking element using queryselectorAll we are getting a nodelist,that nodelist consist of all the element present in page, so to access the element indivivally we can access using index

const heading=document.querySelectorAll('h1')
heading[0].style.color='red'//Correct Way --> **accessing using index

//****4) getElementByClassName
//return HTMLCollection

const tempClass=document.getElementsByClassName("list-item")
//There is no direct Looping support for HTMLCollection, so we have to convert it into array using from method

const myArrayClass= Array.from(tempClass)
myArrayClass.forEach(function(li){
li.style.backgroundColor='blue'
})