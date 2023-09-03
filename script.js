


// Get the "Fetch Data" button element
const fetchDataBtn = document.getElementById("fetchDataBtn");

// Add a click event listener to the button
fetchDataBtn.addEventListener("click", () => {
    // Use the Geolocation API to get user's coordinates
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Display the user's location on Google Maps (You'll need to integrate Google Maps here)

            // Fetch weather data using the One Call API from OpenWeatherMap
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=db1b373fae215624f8fc06fe8dd697fd`)
                .then((response) => response.json())
                .then((data) => {
                    // Handle and display weather data in the #weatherData div
                    const weatherDataDiv = document.getElementById("weatherData");
                    weatherDataDiv.innerHTML = `
                        <h2>Current Weather</h2>
                        <p>Temperature: ${data.current.temp}°C</p>
                        <p>Humidity: ${data.current.humidity}%</p>
                        <!-- Add more weather details here as needed -->
                    `;
                })
                .catch((error) => {
                    console.error("Error fetching weather data:", error);
                });
        });
    } else {
        alert("Geolocation is not available in this browser.");
    }
});
