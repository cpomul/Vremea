const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");

async function callWeather() {
  searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchItem = searchInput.value;

    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=a7264ea0b4b64a9e9fb125807230512&q=${searchItem}&aqi=no`
    );
    response.json().then(function (response) {
      console.log(response);
    });
  });
}
callWeather();
