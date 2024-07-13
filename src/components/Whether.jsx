// src/WeatherCard.js
import React from 'react';

const WeatherCard = ({ weather }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-lg text-center w-full mb-5">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-lg">Temperature: {weather.main.temp}°C</p>
      <p className="text-lg">Humidity: {weather.main.humidity}%</p>
      <p className="text-lg">Pressure: {weather.main.pressure} hPa</p>
      <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
      <p className="text-lg">Coordinates: {weather.coord.lon}, {weather.coord.lat}</p>
      <p className="text-lg">Sunrise: {formatTime(weather.sys.sunrise)}</p>
      <p className="text-lg">Sunset: {formatTime(weather.sys.sunset)}</p>
    </div>
  );
};

export default WeatherCard;
