import "./searchBar.css";

export default function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search-input");
    const city = searchInput.value.trim().toLowerCase();
    if (city) onSearch(city);
    searchInput.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <form id="search-form" action="" onSubmit={handleSearch}>
      <input
        id="search-input"
        type="text"
        placeholder="e.g. Guadalajara"
        onKeyPress={handleKeyPress}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}
