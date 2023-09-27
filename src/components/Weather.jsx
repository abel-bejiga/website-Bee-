import React from 'react'
import dotenv from 'dotenv'



const Weather = ({ setData }) => {
  const weatherIcons = {
    '01d': '☀️',
    '01n': '🌙',
    '02d': '⛅️',
    '02n': '⛅️',
    '03d': '☁️',
    '03n': '☁️',
    '04d': '☁️',
    '04n': '☁️',
    '09d': '🌧️',
    '09n': '🌧️',
    '10d': '🌦️',
    '10n': '🌦️',
    '11d': '⛈️',
    '11n': '⛈️',
    '13d': '❄️',
    '13n': '❄️',
    '50d': '🌫️',
    '50n': '🌫️'
  };


    const fetch_weather = () => {
      fetch('https://www.bemneterbeto.com/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        
      })
      .then((data) => {

        const to_f = Math.floor((data.main.temp - 273.15) * 1.8 + 32)
          const ico = data.weather[0].icon
          const ico_ = weatherIcons[ico]
          setData([to_f, ico_]);
    
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    }

    React.useEffect (() => {
      fetch_weather()
      const update_interval = 60 * 60 * 1000
      const interval_id = setInterval(() => {
        fetch_weather()
      }, update_interval);
      
      return () => clearInterval(interval_id)

    }, [setData])

    
  return (
    <div>
      
    </div>
  )
}

export default Weather
