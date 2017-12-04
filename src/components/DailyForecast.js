import React from 'react';
import Moment from 'moment';

const DailyForecast = ({ forecastData }) => {
  const renderForecasts = forecastData.map(({ apparentTemperatureMax, apparentTemperatureMin, precipProbability, humidity, summary, sunriseTime, sunsetTime, temperatureMax, temperatureMin, time }, index) =>
    <div key={index} className='forecast-card'>
      <h3>Summary: {summary}</h3>
      <p>{Moment.unix(time).format('LL')}</p>
      <p>HI: {Math.round(temperatureMax)} f</p>
      <p>LOW: {Math.round(temperatureMin)} f</p>
      <p>Relative HI: {Math.round(apparentTemperatureMax)} f</p>
      <p>Relative LOW: {Math.round(apparentTemperatureMin)} f</p>
      <p>Chance of Precipitation: {precipProbability * 100}%</p>
      <p>Humidity: {humidity * 100}%</p>
      <p>Sunrise: {Moment.unix(sunriseTime).format('LT')}</p>
      <p>Sunset: {Moment.unix(sunsetTime).format('LT')}</p>


    </div>
  )
  return(
    <div>
      <h3>Daily Forecast</h3>
      {renderForecasts}
    </div>
  )
};

export default DailyForecast;