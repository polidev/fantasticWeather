# Fantastic Weather ⛅

A dark-mode-first, mobile-responsive single-page weather app that fetches real-time weather data from the OpenWeatherMap API. Search any city to view current temperature, humidity, wind speed, sunrise/sunset times, and weather conditions — all in a fluid, accessible interface built with React 19 and Tailwind CSS v4.

## 🚀 Features

- **City search** — type any city name and get instant weather data
- **Current conditions** — temperature, "feels like", humidity, wind speed, atmospheric pressure
- **Sunrise & sunset** — local times calculated from the city's timezone offset
- **Weather icons** — condition-appropriate icons pulled from OpenWeatherMap
- **Dark mode by default** — full dark theme with `.dark` class toggle ready
- **Fully responsive** — fluid typography (`clamp()`), breakpoints at 768px / 1024px / 1440px
- **Accessible** — semantic HTML, `aria-label`, `role="search"`, 44px minimum touch targets
- **Loading & error states** — spinner, error banner, and empty-state prompt
- **React Doctor clean** — zero `useEffect` data-fetching warnings, React Compiler compatible

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev) |
| **Build tool** | [Vite 8](https://vite.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Routing** | [React Router v8](https://reactrouter.com) |
| **API** | [OpenWeatherMap](https://openweathermap.org/api) (free tier) |
| **Linting** | ESLint + React Compiler |
| **Quality** | [React Doctor](https://react.doctor) |

## 📦 Prerequisites

- **Node.js** v18 or later
- **npm** (ships with Node.js)
- A free **OpenWeatherMap API key** ([sign up here](https://openweathermap.org/appid))

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/fantastic-weather.git
   cd fantastic-weather
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your environment variables:**

   Create a `.env` file in the project root (it's already git-ignored):

   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

   > **Note:** Vite requires the `VITE_` prefix for client-side environment variables. The app reads this value from `import.meta.env.VITE_OPENWEATHER_API_KEY`.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

## 💻 Usage

1. Open the app in your browser.
2. Type a city name (e.g., "Tokyo", "London", "Guadalajara") into the search bar.
3. Press **Enter** or click the **Search** button.
4. The weather card displays:
   - City name & country code
   - Current temperature and condition icon
   - "Feels like" temperature
   - Humidity, wind speed, atmospheric pressure
   - Local sunrise & sunset times
   - Timezone offset

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run doctor` | Run React Doctor to audit component health |

### Project structure

```
src/
├── api/
│   └── weather.js              # Pure async fetch functions (no hooks)
├── components/
│   ├── searchBar/
│   │   └── searchBar.jsx       # City search input + button
│   └── weatherCard/
│       └── weatherCard.jsx     # Current weather display
├── pages/
│   └── home.jsx                # Main page — orchestrates search & display
├── App.jsx                     # Root component with router
├── main.jsx                    # Entry point
└── index.css                   # Tailwind v4 theme + fluid typography
```

### Dark mode

Dark mode is enabled by default via the `class="dark"` attribute on `<html>`. To toggle it dynamically, remove or add the `dark` class on the root element:

```js
document.documentElement.classList.toggle("dark");
```

All components use Tailwind's `dark:` variant, so the theme is fully class-controlled — no flash of unstyled light mode.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. For significant changes, please open an issue first to discuss what you'd like to change. Make sure `npm run lint` and `npm run doctor` pass before submitting.

## 📄 License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See `LICENSE` for more information.
