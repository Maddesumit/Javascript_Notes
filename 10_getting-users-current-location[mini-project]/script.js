const button=document.getElementById('get-location-button')

async function getData(lat,long){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=033264b4cb404b40b57172344242409&q=${lat},${long}&aqi=no
    `);
    return await promise.json()
    }
//Fetching location, is a async task, so we use promises
//TO get current location, we use navigator object
async function gotLocation(position){
const result=await getData(position.coords.latitude,position.coords.longitude)
console.log(result)
}

function failedToget(){
    console.log("There was error while getting location")
}

button.addEventListener('click',async ()=>{
    const location=navigator.geolocation.getCurrentPosition(gotLocation,failedToget)
    //navigator.geolocation.getCurrentPosition(()={},()={}), will have 2callback function, one is success callback, and failure callback
})