import SearchBar from "../components/searchBar/searchBar.jsx";
import WeatherCard from "../components/weatherCard/weatherCard.jsx";
import "./home.css";

import { useFetchWeatherData } from "../api/weather.js";
import { useState } from "react";

export default function Home() {
  const [currentCity, setCurrentCity] = useState("");
  const { weatherData, loading, error } = useFetchWeatherData(currentCity);

  return (
    <main className="home">
      <SearchBar setCurrentCity={setCurrentCity} />

      {loading && <p>Loading weather data...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <WeatherCard
          weatherData={{
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
          }}
        />
      )}
    </main>
  );
}
