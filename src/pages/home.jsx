import SearchBar from "../components/searchBar/searchBar.jsx";
import WeatherCard from "../components/weatherCard/weatherCard.jsx";
import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <SearchBar />
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
