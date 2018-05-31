import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'


//keys passed in to combineReducers ends up as a key in the global state

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
