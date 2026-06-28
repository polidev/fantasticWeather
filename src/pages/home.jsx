import { useState } from "react";
import SearchBar from "../components/searchBar/searchBar.jsx";
import WeatherCard from "../components/weatherCard/weatherCard.jsx";
import { fetchWeatherByCity, fetchCurrentWeather } from "../api/weather.js";
import "./home.css";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (city) => {
    setLoading(true);
    setError(null);
    setCurrentWeather(null);

    fetchWeatherByCity(city)
      .then((data) => {
        if (!data) return;
        return fetchCurrentWeather(data.coord.lat, data.coord.lon);
      })
      .then((data) => {
        if (data) setCurrentWeather(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <main className="home">
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading weather data...</p>}
      {error && <p>{error}</p>}

      {currentWeather && <WeatherCard weatherData={currentWeather} />}
    </main>
  );
}
