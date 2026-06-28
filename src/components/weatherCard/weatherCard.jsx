import "./weatherCard.css";

function formatTime(unixTimestamp, timezoneOffset) {
  const date = new Date((unixTimestamp + timezoneOffset) * 1000);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
}

function formatTimezone(offset) {
  const hours = Math.floor(Math.abs(offset) / 3600);
  const minutes = Math.floor((Math.abs(offset) % 3600) / 60);
  const sign = offset >= 0 ? "+" : "-";
  return `UTC${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export default function WeatherCard({ weatherData }) {
  const {
    name,
    sys: { country, sunrise, sunset } = {},
    weather: [{ description }] = [{}],
    main: { temp } = {},
    timezone,
  } = weatherData ?? {};

  return (
    <div className="weather-card">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{country}</p>
      <p className="text-3xl font-semibold mt-2">{Math.round(temp)}°C</p>
      <p className="capitalize">{description}</p>
      <div className="mt-3 text-sm space-y-1">
        <p>Sunrise: {formatTime(sunrise, timezone)}</p>
        <p>Sunset: {formatTime(sunset, timezone)}</p>
        <p>Timezone: {formatTimezone(timezone)}</p>
      </div>
    </div>
  );
}
