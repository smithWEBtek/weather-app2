import React from 'react';
import moment from 'moment';

const MinutelyForecast = ({forecastData}) => {
  const renderForecasts = forecastData.map(({precipIntensity, precipProbability, time}, index) =>
    <div key={index} className='forecast-card'>
      <p>Time: {moment.unix(time).format('MMMM Do YYYY, h:mm a')}</p>
      <p>Precip Intensity: {Math.round(precipIntensity)} %</p>
      <p>Chance of Precipitation: {Math.round(precipProbability)} %</p>
    </div>
  )

  return (
    <div>
      <h3>Minutely Forecast</h3>
      {renderForecasts}
    </div>
  )
}
export default MinutelyForecast;