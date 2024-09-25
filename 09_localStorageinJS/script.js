//Every Browser, will have a permanent storage known as local storage, which is used to store users details
//Values are stored in key-order fashion
// Its window object, and its properties are
//localstorage.setItem("key",value) //Used to set value in local storage
//localStorage.getItem('key) //Used to get  thee  value from localstorage
//In backend we use local storage to store users token, so that user will be signed in even after after reload


const ipusername=document.getElementById('input-username')
const button=document.getElementById('click-button')
const username=document.getElementById('username')

button.addEventListener('click',()=>{
    const value=ipusername.value;
    localStorage.setItem('name',value)
    location.reload() //On click it will reload
})

window.addEventListener('load',()=>{ //When the pagge will reload, it will update the  username
    username.innerText=localStorage.getItem('name')
})