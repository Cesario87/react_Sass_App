import React from 'react';
import WeatherCards from './WeatherCards';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weatherData: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleFormSubmit(event) {
    event.preventDefault();
    const city = event.target.elements.city.value;
    this.setState({ city }, () => {
      this.fetchData();
    });
  }

  kelvinToCelsius = (kelvin) => {
    return Math.round(kelvin - 273.15);
  }

  render() {
    return (
      <div>
        <h1>Know the weather</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            City:
            <input type="text" name="city" ref={(input) => this.cityInput = input} />
          </label>
          <button type="submit">Get Weather</button>
        </form>
        <WeatherCards defaultList={this.state.weatherData} />
      </div>
    );
  }
}

export default Weather;