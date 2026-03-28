const apiKey = "03072ec2f6c1e42ab7e724e64b2e2cca";

const button = document.getElementById("searchBtn");

button.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent =
            "Temperature: " + data.main.temp + " °C";
        document.getElementById("description").textContent =
            "Weather: " + data.weather[0].description;

    } catch (error) {
        console.log("Error fetching weather data:", error);
    }
});
