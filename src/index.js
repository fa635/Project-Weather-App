let location = "london"

async function getWeather () {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=bc6e967a6fbc485281343850240802&q=" + location + "&aqi=no", {mode: 'cors'})
    const weatherData = await response.json()
    console.log("temp_c: " + weatherData.current.feelslike_c)
}
getWeather()







