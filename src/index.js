


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


    async function getGifs () {
        const res = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=qIHPBWfAYAqkZZPhbzBfPxrV553QTJV1&s=cats', {mode: 'cors'})
        const gifsData = await res.json()

        console.log(gifsData.data.images.original.url)

        


        const body = document.querySelector("body")
        body.setAttribute("style", "background-image: url(" + gifsData.data.images.original.url + ")")
        
    }
    getGifs()
    

}
getWeather()


