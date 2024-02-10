


let location
location = prompt("enter city name")

async function getWeather () {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=bc6e967a6fbc485281343850240802&q=" + location + "&aqi=no", {mode: 'cors'})
    const weatherData = await response.json()
    console.log("temp_c: " + weatherData.current.feelslike_c)

    const body = document.querySelector("body")
    const div = document.createElement("div")

    body.appendChild(div)

    div.textContent = "temp_c: " + weatherData.current.feelslike_c
    

}
getWeather()


