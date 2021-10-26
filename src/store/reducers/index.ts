import { combineReducers } from 'redux';
import weatherReducer from './weatherSlice';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});
