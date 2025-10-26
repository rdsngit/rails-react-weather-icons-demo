import React, { useState } from 'react';
import * as style from './Weather.module.css';
import { WiDaySunny, WiDayCloudyWindy, WiDayRainMix } from "weather-icons-react";


const Weather = (props) => {
  const [forecast, setForecast] = useState(props.forecast);
  const weatherIconSize = 200;

  function setWeatherIcon(forecast) {
    switch(forecast) {
      case 'sunny':
        return <WiDaySunny size={weatherIconSize} className={style.sunny} />;
      case 'windy':
        return <WiDayCloudyWindy size={weatherIconSize} className={style.windy} />;
      case 'rainy':
        return <WiDayRainMix size={weatherIconSize} className={style.rainy} />;
      default:
        return <WiDaySunny size={weatherIconSize} className={style.sunny} />;
    }
  }

  return (
    <div>
      <h3>The weather forecast is {forecast}!</h3>
      <hr />
      <form>
        <label className={style.bright} htmlFor="forecast">
          Pick a weather:
        </label>
        <select id="forecast" defaultValue="sunny" onChange={(e) => setForecast(e.target.value)}>
          <option value="sunny">Sunny</option>
          <option value="windy">Windy</option>
          <option value="rainy">Rainy</option>
        </select>
      </form>
      <div>
        {setWeatherIcon(forecast)}
      </div>
    </div>
  );
};

export default Weather;
