import SearchBar from "../components/searchBar/searchBar.jsx";
import WeatherCard from "../components/weatherCard/weatherCard.jsx";
import "./home.css";

import { useFetchWeatherData } from "../api/weather.js";
import { useCurrentWeather } from "../hooks/useCurrentWeather.js";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentCity, setCurrentCity] = useState("");
  const { weatherData, loading, error } = useFetchWeatherData(currentCity);

  const [coordinates, setCoordinates] = useState({});
  const { currentWeather, loadingCurrentWeather, errorCurrentWeather } =
    useCurrentWeather(coordinates);

  useEffect(() => {
    if (weatherData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCoordinates({
        latitude: weatherData.coord.lat,
        longitude: weatherData.coord.lon,
      });
    }
  }, [weatherData]);

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
