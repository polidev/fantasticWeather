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

      <WeatherCard
        weatherData={{
          city: "New York",
          temperature: 25,
          description: "Sunny",
        }}
      />
    </main>
  );
}
