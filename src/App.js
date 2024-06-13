import { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "652fdcd06848fb153a7c4d83d2500d7e";

  // API 호출 함수
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch weather data");
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
    } else {
      setError("please enter a city");
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="wrap">
          <div className="title">
            <p>🌤️ weather</p>
          </div>
          <div className="titleDesc">* 원하는 지역을 영어로 입력해주세요.</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="enter city"
            />
            <button type="submit">가져오기</button>
          </form>
          {error && <p>{error}</p>}
          {weather && (
            <div className="weatherResult">
              <h2>
                <span>🏙️ </span>
                {city}
                <span> 🏙️</span>
              </h2>
              <p>Weather: {weather.weather[0].description}</p>
              <p>Temperature: {weather.main.temp}</p>
              <p>Max - Temperature : {weather.main.temp_max}</p>
              <p>Min - Temperature: {weather.main.temp_min}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
