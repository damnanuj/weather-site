document.addEventListener("DOMContentLoaded", () => {
    const fetchDataButton = document.getElementById("fetch-data");
    const mapContainer = document.getElementById("map-container");
    const latitudeElement = document.getElementById("latitude");
    const longitudeElement = document.getElementById("longitude");
    const temperatureElement = document.getElementById("temperature");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("wind-speed");

    fetchDataButton.addEventListener("click", () => {
        // Fetch Geolocation
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Display Map
                displayMap(latitude, longitude);

                // Fetch Weather Data from OpenWeatherMap API
                const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
                const weatherData = await fetchWeatherData(apiKey, latitude, longitude);

                // Display Weather Data
                displayWeatherData(weatherData);

                // Show map and weather data container
                mapContainer.style.display = "block";
            }, (error) => {
                console.error("Error getting geolocation:", error);
            });
        } else {
            console.error("Geolocation is not supported in this browser.");
        }
    });

    // Function to display the user's location on Google Maps
    function displayMap(latitude, longitude) {
        // Implement Google Maps integration here
        // You'll need to include the Google Maps JavaScript API
    }

    // Function to fetch weather data from OpenWeatherMap API
    async function fetchWeatherData(apiKey, latitude, longitude) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        return await response.json();
    }

    // Function to display weather data on the page
    function displayWeatherData(weatherData) {
        // Extract and display relevant weather details from the API response
        latitudeElement.textContent = weatherData.lat;
        longitudeElement.textContent = weatherData.lon;
        temperatureElement.textContent = weatherData.current.temp;
        humidityElement.textContent = weatherData.current.humidity;
        windSpeedElement.textContent = weatherData.current.wind_speed;
    }
});
