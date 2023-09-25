import React from 'react'

const Weather = ({ setData }) => {
    React.useEffect(() => {
        fetch('http://localhost:3000/api')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
            setData(data);
            console.log(data)
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default Weather
