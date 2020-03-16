import { combineReducers } from "redux";
import weatherInfo from "./weatherReducer";

// Combine reducers
const reducers = combineReducers({
  WeatherInfo: weatherInfo,
});

export default reducers;