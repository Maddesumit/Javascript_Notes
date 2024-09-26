const displayTime=document.getElementById('time')
const button=document.getElementById('stop-btn')
function showTIme(){
    const currentime=new Date();
    const timeformat=`${currentime.getHours()}:${currentime.getMinutes()}:${currentime.getSeconds()}`
    
    displayTime.innerText=timeformat //This will display constant time, we have refresh everytime to get updated time
    // location.reload()
}

// showTIme()

//To display time which update every second we can use use location.reload but it reload page every seconds, but we want only function to reload not complete page
//So we use setTimeOut , which reloads particular function after given millisecond, but it reload only one time
//SetInterval-: It reloads function at every given interval of time

const interval=setInterval(showTIme,1000)
//This setInterval will run in cotinous loop, so how to stop, we can tigger or stop interval using function clear Interval

button.addEventListener('click',()=>{
    clearInterval(interval)
})

