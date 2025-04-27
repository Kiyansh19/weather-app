// Weather.js
import React from 'react';

function Weather({ data }) {
  // Emoji Mapping based on weather condition
  const getEmoji = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return '🌙';
      case 'cloudy':
        return '☁️';
      case 'rainy':
      case 'showers':
        return '🌧️';
      case 'snowy':
        return '❄️';
      case 'windy':
        return '💨';
      case 'foggy':
        return '🌫️';
      default:
        return '🌍'; // Default for unknown condition
    }
  };

  const emoji = getEmoji(data.current.condition.text);

  return (
    <div className="weather-box">
      <h2>{data.location.name}</h2>
      <p className="condition">{data.current.condition.text} {emoji}</p>
      <p className="temp">{data.current.temp_c}°C</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind Speed: {data.current.wind_kph} km/h</p>
    </div>
  );
}

export default Weather;
