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

function DetailItem({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-800/40 px-4 py-3 backdrop-blur-sm">
      <span className="text-fluid-xs text-gray-400">{label}</span>
      <span className="text-fluid-sm font-medium text-gray-100">{value}</span>
    </div>
  );
}

export default function WeatherCard({ weatherData }) {
  const {
    name,
    sys: { country, sunrise, sunset } = {},
    weather: [{ description, icon }] = [{}],
    main: { temp, feels_like, humidity, pressure } = {},
    wind: { speed } = {},
    timezone,
  } = weatherData ?? {};

  if (!weatherData) return null;

  return (
    <article className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-4 text-center md:text-left">
        <h2 className="text-fluid-2xl font-bold text-gray-100">
          {name}
          <span className="ml-2 text-fluid-base font-normal text-indigo-400">
            {country}
          </span>
        </h2>
      </header>

      {/* Main weather display */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        {/* Icon + Temperature */}
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt={description}
              className="h-24 w-24 md:h-32 md:w-32"
            />
          )}
          <div>
            <p className="text-fluid-4xl font-bold text-gray-100 leading-none">
              {Math.round(temp)}°
            </p>
            <p className="mt-1 text-fluid-base capitalize text-gray-300">
              {description}
            </p>
            <p className="text-fluid-sm text-gray-500">
              Feels like {Math.round(feels_like)}°
            </p>
          </div>
        </div>

        {/* Details grid */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          <DetailItem label="Humidity" value={`${humidity}%`} />
          <DetailItem label="Wind" value={`${Math.round(speed)} m/s`} />
          <DetailItem label="Pressure" value={`${pressure} hPa`} />
          <DetailItem
            label="Sunrise"
            value={formatTime(sunrise, timezone)}
          />
          <DetailItem
            label="Sunset"
            value={formatTime(sunset, timezone)}
          />
          <DetailItem label="Timezone" value={formatTimezone(timezone)} />
        </div>
      </div>
    </article>
  );
}
