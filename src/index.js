//data
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let date = new Date();

let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = days[date.getDay()];

let currentHours = document.querySelector("#current-hours");
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

currentHours.innerHTML = `${date.getHours()}:${minutes}`;

let currentDate = document.querySelector(".todayDate");
currentDate.innerHTML = `${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()}`;

//changing city
function searchingCity(event) {
  event.preventDefault();
  let titleCity = document.querySelector(".city");
  let inputCity = document.querySelector("#enter-city");
  titleCity.innerHTML = inputCity.value;

  function displayWeather(response) {
    let temperature = document.querySelector("#temperature");

    let wind = document.querySelector("#wind");
    let humidity = document.querySelector("#humidity");
    temperature.innerHTML = Math.round(response.data.main.temp);
    wind.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
    humidity.innerHTML = `${Math.round(response.data.main.humidity)}%`;
  }

  let city = inputCity.value;
  let apiKey = `24ff68a2822aceb5a863e8fd5e6c4e42`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}
let searchCity = document.querySelector("#searching-form");
searchCity.addEventListener("submit", searchingCity);

//converting temperature

function changeCelsium(event) {
  event.preventDefault();
  temperature.innerHTML = 17;
}

function changeFahrenheit(event) {
  event.preventDefault();
  temperature.innerHTML = Math.round(17 * 1.8 + 32);
}

let temperatureCelsium = document.querySelector("#celsius");
temperatureCelsium.addEventListener("click", changeCelsium);

let temperatureFahrenheit = document.querySelector("#fahrenheit");
temperatureFahrenheit.addEventListener("click", changeFahrenheit);

//current location
