// Wind chill calculation
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Static weather data
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Display weather data
function displayWeather() {
    const windChill =
        temperature <= 10 && windSpeed > 4.8
            ? calculateWindChill(temperature, windSpeed)
            : "N/A";

    document.getElementById("temperature").textContent = `${temperature} °C`;
    document.getElementById("windSpeed").textContent = `${windSpeed} km/h`;
    document.getElementById("windChill").textContent = `${windChill} °C`;
}

// Display footer with last modified date
function updateFooter() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}

// Initialize functions
displayWeather();
updateFooter();
