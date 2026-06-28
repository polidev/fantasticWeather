import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export function useCurrentWeather({ latitude, longitude }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loadingCurrentWeather, setLoading] = useState(true);
  const [errorCurrentWeather, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!latitude || !longitude) return;

        setLoading(true);
        setError(null);

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        const response = await fetch(url);

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
  }, [latitude, longitude]);

  return { currentWeather, loadingCurrentWeather, errorCurrentWeather };
}
