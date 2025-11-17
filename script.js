const searchInput = document.getElementById("search-input");
const weatherForm = document.getElementById("weather-form");
const resultContainer = document.getElementById("result-container");
const cityInfo = document.getElementById("city-info");
const apiKey = "0b1f9bc175eb05f8b91cb668916c5ccf";

//Set up the event listener to the api
//Check if there is any data input
//Take city and convert it to longitute and latitude
//Pass the Long. and Lat. to the National Weather Service api
//Display the forcast to the DOM

weatherForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const input = searchInput.value;

	if (city) {
	} else {
		displayError("Please enter a city");
	}
});

async function getWeatherData(city) {}

async function displayWeatherInfo(data) {}

async function getWeatherEmoji(weatherID) {}

async function displayError(message) {
	const errorDisplay = document.createElement("P");
	errorDisplay.textContent = message;
	errorDisplay.classList.add("errorDisplay");

	cityInfo.textContent = "";
	cityInfo.style.display = "flex";
}
