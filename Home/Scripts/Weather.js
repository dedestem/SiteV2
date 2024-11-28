document.addEventListener('DOMContentLoaded', () => {
    async function fetchWeather() {
        try {
            const response = await fetch('/Php/Wrappers/GetWeather.php');
            const data = await response.json();

            if (data.error) {
                console.error(data.error);
            } else {
                // Toon de laatste weergegevens
                const temperature = data.temperature_2m[0];
                const humidity = data.relative_humidity_2m[0];
                const rain = data.rain[0];
                const windSpeed = data.wind_speed_10m[0];
                const windDirection = data.wind_direction_10m[0];

                document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity} %`;
                document.getElementById('rain').textContent = `Rain: ${rain} mm`;
                document.getElementById('windspeed').textContent = `Windspeed: ${windSpeed} km/h` + ` | ${windDirection} °`;
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    fetchWeather();
});