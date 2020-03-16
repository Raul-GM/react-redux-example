import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import the action
import { fetchWeather } from "./actions/fetchWeather";
// import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function App() {
  const [city, setCity] = useState('');

  const weatherSelector = useSelector(state => state.WeatherInfo);
  const dispatch = useDispatch();
  const getWeatherInfoAction = city => dispatch(fetchWeather(city));
  
  const getWeatherInfo = e => {
    e.preventDefault();
    if (city) {
      getWeatherInfoAction(city);
      console.log('------', weatherSelector);
    }
  }
  return (
    <React.Fragment>
      <div className="App">
        <header>
          <h1>REACT REDUX TEST: WEATHER APP</h1>
          <p>Powered by React Hooks</p>
        </header>
      </div>
      <main>
        <form onSubmit={getWeatherInfo}>
          <div className="control">
            <input type="text" name="name" placeholder="Type a city" onChange={
              e => setCity(e.target.value)
            } />
          </div>
          <input type="submit" value="Check Weather" />
        </form>
      </main>
    </React.Fragment>
  );
}

export default App;
