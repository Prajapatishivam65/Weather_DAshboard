import { useState } from "react";
import { fetchWeatherData } from "../services/weatherApi";
import type { WeatherData } from "../types/weather";

export function useWeather() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<WeatherData | null>(null);

  async function fetchWeather(city: string) {
    try {
      setLoading(true);
      setError(null);
      const weatherData = await fetchWeatherData(city);
      setData(weatherData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchWeather };
}
