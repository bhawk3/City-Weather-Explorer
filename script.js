const searchInput = document.getElementById("search-input").value;
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("result-container");

//Set up the event listener to the api
//Check if there is any data input
//Take city and convert it to longitute and latitude
//Pass the Long. and Lat. to the National Weather Service api
//Display the forcast to the DOM

searchBtn.addEventListener("click", async () => {
	if (!searchInput) {
		return alert("An error has occurred. Please select a different city.");
	}

	try {
		const response = await fetch(`https://api.weather.gov/points/{latitude},{longitude}`);

		if (!response.ok) {
			throw new Error("Could not get the data");
		}

		const data = response.json();

		resultContainer.innerHTML = data.Search.map(() => {
			console.log(data);
		});
	} catch (error) {}
});
