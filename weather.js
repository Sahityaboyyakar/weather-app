function init(weatherData) {
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    switch (weatherData.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url(images/clearsky.jpeg)";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url(images/cloud.jpeg)";
            break;
        case 'Rain':
            document.body.style.backgroundImage = "url(images/rain.jpg)";
            break;
        case 'Drizzle':
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1526679492078-468cc50c62f4?auto=format&fit=crop&w=1600&q=80')";
            break;
        case 'Mist':
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80')";
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80')";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1608889175119-51ba48f2c5e1?auto=format&fit=crop&w=1600&q=80')";
            break;
        default:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')";
            break;
    }
}

async function getWeather(city) {
    const API_KEY = "4767455b1ffd7c81c6ee5ee22627c7d2";
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        
        document.getElementById("weatherOutput").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weatherOutput1").textContent = `Pressure: ${data.main.pressure} hPa`;
        document.getElementById("weatherOutput2").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("weatherOutput3").textContent = `Wind Speed: ${data.wind.speed} m/s`;

        init(data);

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById("weatherOutput").textContent = 'Error: ' + error.message;
    }
}

document.getElementById('button').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    if (city.trim() !== '') {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});