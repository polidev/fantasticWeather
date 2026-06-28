import { useState } from "react";
import SearchBar from "../components/searchBar/searchBar.jsx";
import WeatherCard from "../components/weatherCard/weatherCard.jsx";
import { fetchWeatherByCity, fetchCurrentWeather } from "../api/weather.js";

function Loader() {
  return (
    <output className="flex flex-col items-center gap-4 py-16">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500" />
      <p className="text-fluid-sm text-gray-400">Fetching weather…</p>
    </output>
  );
}

function ErrorDisplay({ message }) {
  return (
    <div className="mx-auto max-w-md rounded-xl border border-red-800/50 bg-red-900/20 px-6 py-4 text-center backdrop-blur-sm">
      <p className="text-fluid-sm font-medium text-red-400">{message}</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-3 py-20 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-600"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <h2 className="text-fluid-lg font-semibold text-gray-300">
        Check the weather
      </h2>
      <p className="max-w-xs text-fluid-sm text-gray-500">
        Search for a city to see current temperature, humidity, and conditions.
      </p>
    </div>
  );
}

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
    <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 py-6 md:px-8 md:py-10">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <h1 className="text-fluid-xl font-bold text-gray-100">
          <span className="text-indigo-400">&#9925;</span> Fantastic Weather
        </h1>
      </header>

      {/* Search */}
      <section className="flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </section>

      {/* Content */}
      <section className="mt-8 flex-1 md:mt-12">
        {loading && <Loader />}
        {error && <ErrorDisplay message={error} />}
        {!loading && !error && !currentWeather && <EmptyState />}
        {currentWeather && <WeatherCard weatherData={currentWeather} />}
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-fluid-xs text-gray-600">
        Powered by{" "}
        <a
          href="https://openweathermap.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 underline-offset-2 hover:underline"
        >
          OpenWeatherMap
        </a>
      </footer>
    </div>
  );
}
