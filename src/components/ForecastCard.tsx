import React from 'react';

interface ForecastCardProps {
  date: string;
  temp: number;
  description: string;
  icon: string;
  unit: 'celsius' | 'fahrenheit';
}

export function ForecastCard({ date, temp, description, icon, unit }: ForecastCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
      <p className="text-sm font-medium text-gray-600">{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
        className="w-12 h-12 mx-auto"
      />
      <p className="text-xl font-bold text-center">
        {temp}°{unit === 'celsius' ? 'C' : 'F'}
      </p>
      <p className="text-sm text-gray-600 text-center capitalize">{description}</p>
    </div>
  );
}