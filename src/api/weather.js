import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useFetchWeatherData(city_name) {
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BASE_URL}`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setWeatherData(data);

        console.log("Weather data fetched successfully:", data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);

          console.error("Error fetching weather data:", error.message);
        } else {
          setError("An error occurred while fetching weather data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL]);

  return { weatherData, loading, error };
}
