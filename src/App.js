import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";  // import footer

// Mapping weather codes to descriptions and emojis
const weatherCodes = {
  0: "☀️ Clear sky",
  1: "🌤️ Mainly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Fog",
  48: "🌫️ Depositing rime fog",
  51: "🌦️ Light drizzle",
  53: "🌦️ Moderate drizzle",
  55: "🌧️ Dense drizzle",
  61: "🌦️ Slight rain",
  63: "🌧️ Moderate rain",
  65: "🌧️ Heavy rain",
  71: "❄️ Slight snow fall",
  73: "❄️ Moderate snow fall",
  75: "❄️ Heavy snow fall",
  80: "🌦️ Rain showers",
  81: "🌧️ Heavy rain showers",
  82: "🌧️ Violent rain showers",
  95: "⛈️ Thunderstorm",
  99: "⛈️ Thunderstorm with hail",
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      // 1. Get city coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) {
        setWeather({ error: "City not found" });
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 2. Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        name: `${name}, ${country}`,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        condition: weatherData.current_weather.weathercode,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather({ error: "Failed to fetch weather" });
    }
  };

  return (
    <div className="App">
      <h1>🌦️ Weather Now</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && weather.error && <p className="error">❌ {weather.error}</p>}

      {weather && !weather.error && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <p>🌡️ {weather.temp} °C</p>
          <p>💨 {weather.wind} km/h</p>
          <p>
            {weatherCodes[weather.condition] ||
              `🌍 Condition code: ${weather.condition}`}
          </p>
        </div>
      )}

      {/* Footer added here */}
      <Footer />
    </div>
  );
}

export default App;
