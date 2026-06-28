import { useRef } from "react";

export default function SearchBar({ onSearch }) {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = inputRef.current?.value.trim();
    if (city) {
      onSearch(city.toLowerCase());
      inputRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl gap-3"
      role="search"
    >
      <label htmlFor="city-search" className="sr-only">
        Search for a city
      </label>
      <input
        ref={inputRef}
        id="city-search"
        type="text"
        placeholder="Search city… e.g. London, Tokyo"
        required
        className="min-h-[44px] flex-1 rounded-xl border border-gray-700 bg-gray-800/60 px-4 text-fluid-base text-gray-100 placeholder-gray-500 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 backdrop-blur-sm"
      />
      <button
        type="submit"
        className="min-h-[44px] min-w-[44px] flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-fluid-sm font-medium text-white transition-colors hover:bg-indigo-500 active:bg-indigo-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="hidden sm:inline">Search</span>
      </button>
    </form>
  );
}
