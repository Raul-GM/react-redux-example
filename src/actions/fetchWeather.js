export function fetchWeather(city) {
  return function(dispatch) {
    fetch(`http://api.weatherstack.com/current?access_key=903750f058bc1fb301fdf13600077eb6&query=${city}`).then(res => {
      return res.json();
    }).then(data => {
      // dispatch the action
      dispatch({
        type: "FETCH_WEATHER",
        payload: data,
      });
    }).catch(err => {
      console.log(err);
    })
  }
}

// http://api.weatherstack.com/current