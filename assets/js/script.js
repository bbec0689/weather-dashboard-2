var citySearch = document.querySelector("search-button");
var getCityName = document.querySelector("#current-city")
var getCityTemp = document.querySelector("#city-temp")
var getCityWS = document.querySelector("#city-ws")
var getCityHumid = document.querySelector("#city-humid")


// Current City Weather

function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=64a50eda68eb7a2b92c0bc02b65b4593')

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            getCity(data);
            getTemp(data);
            getWS(data);
            getHumid(data)
            console.log(data)
        })
}

function getCity(data) {
    var cityName = data.name
    var cityNameText = document.createTextNode(cityName)
    getCityName.appendChild(cityNameText);
}

function getTemp(data) {
    var cityTemp = data.main.temp
    var cityTempText = document.createTextNode(cityTemp)
    getCityTemp.appendChild(cityTempText);
}

function getHumid(data) {
    var cityHumid = data.main.humidity
    var cityHumidText = document.createTextNode(cityHumid)
    getCityHumid.appendChild(cityHumidText);
}

function getWS(data) {
    var cityWS = data.wind.speed
    var cityWSText = document.createTextNode(cityWS)
    getCityWS.appendChild(cityWSText);
}

//5 Day Forecast

function getForecast(cityId) {
    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + '&appid=64a50eda68eb7a2b92c0bc02b65b4593'
    )

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            
        })
}

