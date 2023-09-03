// Constants for API URLs
const GEOLOCATION_API_URL = "https://api.openweathermap.org/data/2.5/onecall";
const OPENWEATHERMAP_API_KEY = "db1b373fae215624f8fc06fe8dd697fd"; // Replace with your OpenWeatherMap API key

// Function to fetch geolocation
function getGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Call functions to display map and fetch weather data
            displayMap(latitude, longitude);
            fetchWeatherData(latitude, longitude);
        });
    } else {
        alert("Geolocation is not supported in this browser.");
    }
}

// Function to display Google Map
function displayMap(latitude, longitude) {
    const mapDiv = document.getElementById("map");

    // Use the latitude and longitude to create a Google Map
    const map = new google.maps.Map(mapDiv, {
        center: { lat: latitude, lng: longitude },
        zoom: 10,
    });
}

// Function to fetch weather data from OpenWeatherMap
function fetchWeatherData(latitude, longitude) {
    const apiKey = OPENWEATHERMAP_API_KEY;
    
    // Make a GET request to the OpenWeatherMap API
    fetch(`${GEOLOCATION_API_URL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            // Process and display weather data in the weatherData div
            const weatherDataDiv = document.getElementById("weatherData");
            // Example: weatherDataDiv.innerHTML = `Temperature: ${data.current.temp}°C`;

            // Handle other weather data as needed
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

// Attach the getGeolocation function to the button click event
document.getElementById("fetchDataBtn").addEventListener("click", getGeolocation);
