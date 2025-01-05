import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';

interface WeatherCardProps {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  unit: 'celsius' | 'fahrenheit';
}

export function WeatherCard({ temp, humidity, windSpeed, description, icon, unit }: WeatherCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="w-16 h-16"
          />
          <div>
            <h2 className="text-4xl font-bold">
              {temp}°{unit === 'celsius' ? 'C' : 'F'}
            </h2>
            <p className="text-gray-600 capitalize">{description}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center space-x-2">
          <Droplets className="text-blue-500" />
          <span className="text-gray-700">{humidity}% Humidity</span>
        </div>
        <div className="flex items-center space-x-2">
          <Wind className="text-blue-500" />
          <span className="text-gray-700">{windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
}