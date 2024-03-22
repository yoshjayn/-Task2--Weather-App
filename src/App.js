import { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';

import Highlights from './components/Highlights';


const api_key = "7d8b757d44f448cc8c83fe500700cbbb";
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.389015&units=metric&appid=${api_key}`;

function App() {
  
  const [weatherData, setweatherData] = useState(null)
  const [input, setInput] = useState("");

  // useEffect(()=>{
  //   setweatherData("Delhi")
  // },[])



  async function getWheaterData(location) {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${api_key}`;

    try {
      const geocodingResponse = await fetch(geocodingUrl);
      const geocodingData = await geocodingResponse.json();
      
      console.log(geocodingData);

      if (geocodingData.length > 0) {
        const { lat, lon } = geocodingData[0];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
      
        try {
          const weatherResponse = await fetch(weatherUrl);
          const weatherData = await weatherResponse.json();
          setweatherData(weatherData);

          console.log(weatherData);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          // Handle errors, e.g., display a user-friendly message
        }
      } else {
        // Handle case where location not found
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle errors, e.g., display a user-friendly message
    }
  }
  // if(weatherData==null) return <div>
  //   loading....
  // </div>
  return (
    <div className="flex App">
    <div className="flex flex-col gap-10">

    <div className='px-40 pt-40 search-field'>
    <input
          type="text"
          id="search-input"
          placeholder="Enter location"
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
        />
    <button onClick={()=>{
      getWheaterData(input)
    }}>Search</button>
    </div>

      <div className="p-20">
      <CurrentWeather data={weatherData}/>
      </div>
    </div>

      <div className="p-20">
      <Highlights data={weatherData}/>
      </div>
    </div>
  );
}

export default App;
