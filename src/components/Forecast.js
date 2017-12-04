import React from 'react';
import moment from 'moment';

const Forecast = ({forecast: { apparentTemperature, humidity, precipProbability, summary, temperature, time }}) =>
  <div className='forecast-card'>
    <h2>{summary}</h2>
    <p>Time: {moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
    <p>Temperature: {Math.round(temperature)} f</p>
    <p>Feels Like: {Math.round(apparentTemperature)} f</p>
    <p>Chance of Precipitation: {Math.round(precipProbability)} %</p>
    <p>Humidity: {humidity * 100} %</p>
  </div>

export default Forecast;
