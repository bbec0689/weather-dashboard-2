

var citySearch = document.querySelector("search-button");
var getCityName = document.querySelector("#current-city")
var getCityTemp = document.querySelector("#city-temp")
var getCityWS = document.querySelector("#city-ws")
var getCityHumid = document.querySelector("#city-humid")
var getForecastTemp = document.querySelector('#forecast-temp')
var getForecastHumid = document.querySelector('#forecast-humid')



// Current City Weather

function getWeather() {

    var inputElement = document.getElementById('search-input')
    var searchCity = inputElement.value;

    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial&appid=64a50eda68eb7a2b92c0bc02b65b4593'
        )

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            getCity(data);
            getTemp(data);
            getWS(data);
            getHumid(data)
            getForecast(data)

        })
}

function getCity(data) {
    var cityName = data.name
    var cityNameText = document.createTextNode(cityName)
    getCityName.appendChild(cityNameText);
}

function getTemp(data) {
    var cityTemp = data.main.temp
    var cityTempText = document.createTextNode(cityTemp + "°F")
    getCityTemp.appendChild(cityTempText);
}

function getHumid(data) {
    var cityHumid = data.main.humidity
    var cityHumidText = document.createTextNode(cityHumid + "%")
    getCityHumid.appendChild(cityHumidText);
}

function getWS(data) {
    var cityWS = data.wind.speed
    var cityWSText = document.createTextNode(cityWS + "MPH")
    getCityWS.appendChild(cityWSText);
}

//5 Day Forecast

function getForecast() {

    var inputElement = document.getElementById('search-input')
    var searchCity = inputElement.value;

    fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + '&units=imperial&appid=64a50eda68eb7a2b92c0bc02b65b4593'
    )

        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            getTemp5(data)
            getHumid5(data)
            console.log(data)
        })
}

function getTemp5 (data) {
    var forecastTemp = data.list[2].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp.appendChild(forecastTempText)
}

function getHumid5(data) {
    var forecastHumid = data.list[2].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid.appendChild(forecastHumidText)
}
