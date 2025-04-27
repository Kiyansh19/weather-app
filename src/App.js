// App.js
import { useState } from 'react';
import axios from 'axios';
import Weather from './weather'; // Import Weather component
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '2e484c29240c49b8894121654252302'; // Your API key from WeatherAPI

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeather(res.data);
      setError(''); // Clear any previous error
    } catch (error) {
      setWeather(null); // Reset weather data if error occurs
      setError('City not found!');
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      <p>Made with Fun </p>

      {error && <p>{error}</p>}
      {weather && <Weather data={weather} />} 
    </div>
  );
}

export default App;
