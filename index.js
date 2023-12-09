import DateTime from "./DateTime.js";

const dateTimeDisplay = new DateTime();
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const currentWeather = document.querySelector("#currentWeather");
const locationData = document.querySelector("#locationData");
const temp = document.querySelector("#temp");

const feelsLikeC = document.querySelector("#feelsLikeC");
const humidity = document.querySelector("#humidity");
const chanceOfRain = document.querySelector("#chanceOfRain");
const windSpeed = document.querySelector("#windSpeed");
async function callWeather() {
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchItem = searchInput.value;

    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a7264ea0b4b64a9e9fb125807230512&q=${searchItem}&days=1&aqi=yes&alerts=no`
    );
    response.json().then(function (response) {
      console.log(response);
      currentWeather.textContent = response.current.condition.text;
      locationData.textContent = response.location.country;
      dateTimeDisplay.updateTimeContinuously();
      temp.textContent = response.current.temp_c + "°C";

      feelsLikeC.textContent = `Feels Like ${response.current.feelslike_c}°C`;
      humidity.textContent = `Humidity ${response.current.humidity}%`;
      chanceOfRain.textContent = `Chance fo Rain ${response.forecast.forecastday[0].day.daily_chance_of_rain}%`;
      windSpeed.textContent = `Wind Speed ${response.current.wind_kph}Kph`;
    });
  });
}
callWeather();
