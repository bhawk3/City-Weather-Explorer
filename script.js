const searchInput = document.getElementById("search-input").value;
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.getElementById("result-container");

searchBtn.addEventListener("click", async () => {
	if (!searchInput) {
		return alert("An error has occurred. Please select a different city.");
	}

	try {
		const response = await fetch(`https://api.weather.gov/points/{latitude},{longitude}`);
	} catch (error) {}
});
