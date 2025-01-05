import { useState } from "react";
import { Cloud } from "lucide-react";
import { WeatherCard } from "./components/WeatherCard";
import { ForecastCard } from "./components/ForecastCard";
import { SearchBar } from "./components/SearchBar";
import { useWeather } from "./hooks/useWeather";
import type { TemperatureUnit } from "./types/weather";

function App() {
  const { data: weatherData, loading, error, fetchWeather } = useWeather();
  const [unit, setUnit] = useState<TemperatureUnit>("celsius");

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2560&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Cloud className="text-white" size={32} />
            <h1 className="text-3xl font-bold text-white">Weather Dashboard</h1>
          </div>
          <button
            onClick={toggleUnit}
            className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-md
                     hover:bg-white/100 transition-colors"
          >
            Switch to °{unit === "celsius" ? "F" : "C"}
          </button>
        </div>

        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div className="bg-red-100/90 backdrop-blur-sm text-red-700 p-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-white text-center">Loading weather data...</div>
        ) : weatherData ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {weatherData.city}
              </h2>
              <WeatherCard {...weatherData.current} unit={unit} />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                5-Day Forecast
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <ForecastCard key={index} {...day} unit={unit} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-white text-center">
            Search for a city to see weather information
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
