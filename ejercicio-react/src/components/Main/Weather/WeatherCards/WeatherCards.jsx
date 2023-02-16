import React from 'react';

function WeatherCards(props) {
  const { defaultList } = props;

  function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  function getWeatherImage(weatherType) {
    if (weatherType === 'Clouds') {
      return require('./assets/clouds.jpg');
    } else {
      return require('./assets/sun.png');
    }
  }

  if (defaultList.length === 0) {
    return null;
  }

  return (
    <div>
      <h1>Forecast:</h1>
      {defaultList.map(cityWeather =>
        <div key={cityWeather.dt}>
          <p>{cityWeather.dt_txt}</p>
          <p>{kelvinToCelsius(cityWeather.main.temp)}ºC</p>
          <img src={getWeatherImage(cityWeather.weather[0].main)} alt={cityWeather.weather[0].main} />
          <br />
        </div>
      )}
    </div>
  );
}

export default WeatherCards;
