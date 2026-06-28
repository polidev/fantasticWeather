const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function fetchWeatherByCity(cityName) {
  if (!cityName) return null;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

export async function fetchCurrentWeather(lat, lon) {
  if (lat == null || lon == null) return null;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}
