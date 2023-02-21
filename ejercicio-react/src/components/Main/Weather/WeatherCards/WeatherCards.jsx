import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
    <div className="weatherCardFormat">
      {defaultList.map(cityWeather =>
        <Card 
        className="weatherCardSize" 
        key={cityWeather.dt} 
        sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={getWeatherImage(cityWeather.weather[0].main)}
              alt={cityWeather.weather[0].main}
              sx={{ width: 200, height: 120, paddingLeft: 2 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h8" component="div" sx={{ width: 200, height: 20 }}>
                {cityWeather.dt_txt}
              </Typography>
              <Typography variant="h2" color="text.secondary" sx={{ paddingLeft: 4 }}>
                {kelvinToCelsius(cityWeather.main.temp)}ºC
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )};
    </div>
    // <div>
    //   {defaultList.map(cityWeather =>
    //     <div key={cityWeather.dt}>
    //       <p>{cityWeather.dt_txt}</p>
    //       <p>{kelvinToCelsius(cityWeather.main.temp)}ºC</p>
    //       <img src={getWeatherImage(cityWeather.weather[0].main)} alt={cityWeather.weather[0].main} />
    //       <br />
    //     </div>
    //   )}
    // </div>
  );
}

export default WeatherCards;
