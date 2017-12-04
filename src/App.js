import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'
import logo from './logo.svg';
import './App.css';
import Forecast from './components/Forecast'
import MinutelyForecast from './components/MinutelyForecast'
import DailyForecast from './components/DailyForecast'
import Navbar from './components/Navbar'

const APIURL = `https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY_KEY}/`

class App extends Component {
  constructor() {
    super() 

    this.state = {
      fetchingData: true,
      weatherData: {},
      forecastKey: 'currently',
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      fetchJsonp(`${APIURL}${latitude},${longitude}`)
        .then(response => response.json())
        .then(weatherData => this.setState({ 
          fetchingData: false,
          weatherData 
        }))
    });
  }

  handleForecastChange = forecastKey => this.setState({ 
    forecastKey: forecastKey
  })

  render(){
    const { fetchingData, weatherData, forecastKey } = this.state
    const forecast = weatherData[forecastKey]

    console.log("forecastKey: ", forecastKey)
    console.log("weatherData[forecastKey]: ", weatherData[forecastKey])

    return (
      <div className="App">
        <div className="App-header">
          <h2>Weather App</h2>
        </div>
        <div className="App-intro">
          {
            fetchingData ?
            <div> 
              <p>fetching data ...</p>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            :
          <div>
            <Navbar changeForecast={this.handleForecastChange} />
            {forecastKey === 'currently' && 
              <div>
                <h3>Current Forecast</h3>
                <Forecast forecast={forecast} />
              </div>
            }
            {forecastKey === 'minutely' && <MinutelyForecast forecastData={forecast.data} /> }
            {forecastKey === 'hourly' && 
            <div>
              <h3>Hourly Forecast</h3>
              {forecast.data.map((forecast, index) => <Forecast key={index} forecast={forecast} /> )}
            </div>
            }
            {forecastKey === 'daily' && <DailyForecast forecastData={forecast.data} /> }
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App;