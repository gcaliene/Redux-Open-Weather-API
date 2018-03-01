import { combineReducers } from 'redux';
import WeatherReducer from './weather';

const rootReducer = combineReducers({
  // state: (state = {}) => state   <-- an example
  weather: WeatherReducer
});

export default rootReducer;
