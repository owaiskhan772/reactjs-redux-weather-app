import { combineReducers } from 'redux';

import weatherReducer from './weather_reducer';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
