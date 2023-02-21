import React from 'react';
import WeatherCards from './WeatherCards';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherData: [],
      coords: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleGetLocationClick = this.handleGetLocationClick.bind(this);
  }

  async componentDidMount() {
    // Puedes establecer un valor por defecto para la ciudad
    const city = 'Madrid';
    this.setState({ city });
  }

  async fetchData() {
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await resp.json();
      this.setState({ weatherData: data.list });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchDataWithCoords() {
    try {
      const { coords } = this.state;
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_API_KEY}`);
      const data = await resp.json();
      this.setState({ weatherData: data.list });
    } catch (error) {
      console.error(error);
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    this.setState({ city, coords: null });
  }

  handleGetLocationClick() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ coords: { latitude, longitude } });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.city !== prevState.city) {
      this.fetchData();
    } else if (this.state.coords !== prevState.coords) {
      this.fetchDataWithCoords();
    }
  }

  render() {
    const { city, coords } = this.state;
    const heading = coords ? 'Forecast in your location:' : `Forecast in ${city}`;
  
    return (
      <div>
        <h1>Know the weather</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            City:
            <input type="text" name="city" ref={(input) => this.cityInput = input} />
          </label>
          <button type="submit">Get Weather</button>
          <button type="button" onClick={this.handleGetLocationClick}>Get My Location</button>
        </form>
        <h1>{heading}</h1>
        <WeatherCards defaultList={this.state.weatherData} />
      </div>
    );
  }
}

export default Weather;

