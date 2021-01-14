var citySearch = document.querySelector("search-button");
var getCityName = document.querySelector("#current-city")
var getCityTemp = document.querySelector("#city-temp")
var getCityWS = document.querySelector("#city-ws")
var getCityHumid = document.querySelector("#city-humid")
var clearHistoryEl = document.querySelector('#clear-history')

var getForecastTemp = document.querySelector('#forecast-temp')
var getForecastTemp1 = document.querySelector('#forecast-temp1')
var getForecastTemp2 = document.querySelector('#forecast-temp2')
var getForecastTemp3 = document.querySelector('#forecast-temp3')
var getForecastTemp4 = document.querySelector('#forecast-temp4')
var getForecastHumid = document.querySelector('#forecast-humid')
var getForecastHumid1 = document.querySelector('#forecast-humid1')
var getForecastHumid2 = document.querySelector('#forecast-humid2')
var getForecastHumid3 = document.querySelector('#forecast-humid3')
var getForecastHumid4 = document.querySelector('#forecast-humid4')

var getLastCity = document.querySelector('#list-city')




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
            // localStorage.setItem(data.name, JSON.stringify(data));
            getCity(data);
            getTemp(data);
            getWS(data);
            getHumid(data)
            getForecast(data)
            getCityLast(data)
        })
    
}

// function getHistory() {

//     var inputElement = document.getElementById('list-city').innerText
//     console.log(inputElement)
//     var searchCity = inputElement.innerHTML;
//     console.log(searchCity)

//     fetch(
//         'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&units=imperial&appid=64a50eda68eb7a2b92c0bc02b65b4593'
//         )

//         .then(function (response) {

//             return response.json();
//         })
//         .then(function (data) {
//             getCityLast(data)
//         })
//     }

function getCityLast(data) {
    var saveCity = data.name
    var saveCityDiv = document.createElement('button')
    
    saveCityDiv.classList.add('list-item')
    var saveCityText = document.createTextNode(saveCity)
    saveCityDiv.appendChild(saveCityText)
    getLastCity.appendChild(saveCityDiv)

    localStorage.setItem(data.name, JSON.stringify(data));

    console.log(localStorage.key(data))

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)

        getLastCity.saveCityDiv += `${key}`
    }
}


function clearHistory(data) {
    localStorage.clear(data);
    document.location.reload()
}
//Colllecting data for the current day

function getCity(data) {
    var cityName = data.name
    var cityNameText = document.createTextNode(cityName)
    getCityName.appendChild(cityNameText);

    var item = document.getElementById("current-city");
    item.replaceChild(cityNameText, item.childNodes[0]);
}

function getTemp(data) {
    var cityTemp = data.main.temp
    var cityTempText = document.createTextNode(cityTemp + "°F")
    getCityTemp.appendChild(cityTempText);

    var item = document.getElementById("city-temp");
    item.replaceChild(cityTempText, item.childNodes[0]);
}

function getHumid(data) {
    var cityHumid = data.main.humidity
    var cityHumidText = document.createTextNode(cityHumid + "%")
    getCityHumid.appendChild(cityHumidText);

    var item = document.getElementById("city-humid");
    item.replaceChild(cityHumidText, item.childNodes[0]);
}

function getWS(data) {
    var cityWS = data.wind.speed
    var cityWSText = document.createTextNode(cityWS + "MPH")
    getCityWS.appendChild(cityWSText);

    var item = document.getElementById("city-ws");
    item.replaceChild(cityWSText, item.childNodes[0]);
}

// End current city weather

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
            getTemp1(data)
            getTemp2(data)
            getTemp3(data)
            getTemp4(data)
            getTemp5(data)
            getHumid1(data)
            getHumid2(data)
            getHumid3(data)
            getHumid4(data)
            getHumid5(data)
        })
}

//Collecting temp and humidity for the 5 days

function getTemp1 (data) {
    var forecastTemp = data.list[2].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp.appendChild(forecastTempText)

    var item = document.getElementById("forecast-temp");
    item.replaceChild(forecastTempText, item.childNodes[0]);
}

function getHumid1(data) {
    var forecastHumid = data.list[2].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid.appendChild(forecastHumidText)

    var item = document.getElementById("forecast-humid");
    item.replaceChild(forecastHumidText, item.childNodes[0]);
}

function getTemp2 (data) {
    var forecastTemp = data.list[14].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp1.appendChild(forecastTempText)

    var item = document.getElementById("forecast-temp1");
    item.replaceChild(forecastTempText, item.childNodes[0]);
}

function getHumid2 (data) {
    var forecastHumid = data.list[14].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid1.appendChild(forecastHumidText)

    var item = document.getElementById("forecast-humid1");
    item.replaceChild(forecastHumidText, item.childNodes[0]);
}

function getTemp3 (data) {
    var forecastTemp = data.list[22].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp2.appendChild(forecastTempText)

    var item = document.getElementById("forecast-temp2");
    item.replaceChild(forecastTempText, item.childNodes[0]);
}

function getHumid3 (data) {
    var forecastHumid = data.list[22].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid2.appendChild(forecastHumidText)

    var item = document.getElementById("forecast-humid2");
    item.replaceChild(forecastHumidText, item.childNodes[0]);
}

function getTemp4 (data) {
    var forecastTemp = data.list[30].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp3.appendChild(forecastTempText)

    var item = document.getElementById("forecast-temp3");
    item.replaceChild(forecastTempText, item.childNodes[0]);
}

function getHumid4 (data) {
    var forecastHumid = data.list[30].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid3.appendChild(forecastHumidText)

    var item = document.getElementById("forecast-humid3");
    item.replaceChild(forecastHumidText, item.childNodes[0]);
}

function getTemp5 (data) {
    var forecastTemp = data.list[38].main.temp
    var forecastTempText = document.createTextNode(forecastTemp + "°F")
    getForecastTemp4.appendChild(forecastTempText)

    var item = document.getElementById("forecast-temp4");
    item.replaceChild(forecastTempText, item.childNodes[0]);
}

function getHumid5 (data) {
    var forecastHumid = data.list[38].main.humidity
    var forecastHumidText = document.createTextNode(forecastHumid + "%")
    getForecastHumid4.appendChild(forecastHumidText)

    var item = document.getElementById("forecast-humid4");
    item.replaceChild(forecastHumidText, item.childNodes[0]);
}

//End 5 day forecast


