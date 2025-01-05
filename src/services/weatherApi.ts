import { WEATHER_API_CONFIG } from "../config/api";
import type { WeatherData } from "../types/weather";

export async function fetchWeatherData(city: string): Promise<WeatherData> {
  const { baseUrl, apiKey } = WEATHER_API_CONFIG;

  // Fetch current weather
  const currentResponse = await fetch(
    `${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!currentResponse.ok) {
    throw new Error("Failed to fetch current weather");
  }

  const currentData = await currentResponse.json();

  // Fetch 5-day forecast
  const forecastResponse = await fetch(
    `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!forecastResponse.ok) {
    throw new Error("Failed to fetch forecast");
  }

  const forecastData = await forecastResponse.json();

  // Process and return formatted data
  return {
    city: currentData.name,
    current: {
      temp: Math.round(currentData.main.temp),
      humidity: currentData.main.humidity,
      windSpeed: currentData.wind.speed,
      description: currentData.weather[0].description,
      icon: currentData.weather[0].icon,
    },
    forecast: forecastData.list
      .filter((_: any, index: number) => index % 8 === 0) // One reading per day
      .slice(0, 5)
      .map((day: any) => ({
        date: new Date(day.dt * 1000).toLocaleDateString(),
        temp: Math.round(day.main.temp),
        description: day.weather[0].description,
        icon: day.weather[0].icon,
      })),
  };
}
