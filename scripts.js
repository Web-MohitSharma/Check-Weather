const apikey = "759bc263a5949307cd0b7f4557f2f54c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function checkweather() {
    const cityname = document.getElementsByTagName("input")[0].value;
    const responce = await fetch(apiurl + cityname + `&appid=${apikey}`);
    if(responce.status==404){
        alert("Please Enter valid city name")
    }
    const weatherIcon = document.getElementsByClassName("weather_icon")[0];
    var data = await responce.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = parseFloat(data.wind.speed.toFixed(1)) + "km/h";
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }
}

function search() {
    checkweather()
}