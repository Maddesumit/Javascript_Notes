const button=document.getElementById('search-button')
const input=document.getElementById('city-input')

const cityName=document.getElementById('city-name')
const cityTime=document.getElementById('city-time')
const cityTemp=document.getElementById('city-temp')

async function getData(cityName){
const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=033264b4cb404b40b57172344242409&q=${cityName}&aqi=no
`);
return await promise.json()
}
button.addEventListener('click',async ()=>{
    const value=input.value;
    const result= await getData(value);
    console.log(result)
    cityName.innerText=`Cityname-: ${result.location.name} 
    Country-:${result.location.country} 
    Region-:${result.location.region}`
    cityTime.innerText=result.location.localtime
    cityTemp.innerText=`${result.current.temp_c} °C`

   
})