const searchField = document.querySelector('#search-field');
const searchButton = document.querySelector('#search');
const otherWeatherInfo = document.querySelector('.other-info')
const weatherDetails = document.querySelector('.weather-details')


const BASE_URL = "https://api.openweathermap.org";
const API_KEY = "Your API Key here"; //Api_key can be gotten from the official website "https://api.openweathermap.org" NB: ACCOUNT CREATION IS REQUIRED


searchButton.addEventListener('click', async () =>{
    try{
        const query = searchField.value.trim()
        const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${encodeURIComponent(query)}&units=metric&APPID=${API_KEY}`)
        const result = await response.json()
        //console.log(result.main)
        //alert('Botton Clicked')
        let city_name = result.name
        let humidity = result.main.humidity
        let windspeed = result.wind.speed
        let temp = result.main.temp

        console.log(`The data in ${city_name}:
                            Temperature: ${temp}
                            Humidity: ${humidity}
                            Windspeed ${windspeed}`)

        if (humidity && temp && windspeed) {
            document.getElementById('humidity').innerText = humidity;
            document.getElementById('temerature').innerText = temp;
            document.getElementById('wind').innerText = windspeed;

        
        }

    } catch(err){
        document.getElementById('error-msg').innerHTML = `<p style="color: red; text-align: center; font-size: 1.3rem;">Error.... ${err.message}</p>`
        console.log(err);
        
    } finally{
        console.log("Succeed")
    }
})
