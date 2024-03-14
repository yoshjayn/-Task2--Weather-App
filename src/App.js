import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="flex App">
      <div className="flex flex-col gap-10">
      <CurrentWeather/>
      5 Days Forecast
      <Forecast/>
      </div>
      <div>
      <Highlights/>
      </div>
    </div>
  );
}

export default App;
