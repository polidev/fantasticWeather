import "./weatherCard.css";

export default function WeatherCard({ weatherData }) {
  return (
    <div className="weather-card">
      <h2>{weatherData.city}</h2>
      <p>{weatherData.temperature}°C</p>
      <p>{weatherData.description}</p>
    </div>
  );
}
