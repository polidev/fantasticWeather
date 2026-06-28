import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useWeather({ latitude, longitude }) {
  const CURRENT_WEATHER_BASE_URL = `https://api.openweathermap.org/data/4.0/onecall/current?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${CURRENT_WEATHER_BASE_URL}`);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setCurrentWeather(data);

        console.log("Local weather data fetched successfully:", data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);

          console.error("Error fetching local weather data:", error.message);
        } else {
          setError("An error occurred while fetching local weather data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [CURRENT_WEATHER_BASE_URL]);

  return { currentWeather, loading, error };
}
