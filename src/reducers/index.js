import { createReducer } from 'redux-act';
import {requestWeather, requestWeatherSuccess, fetchWeather, requestWeatherError} from '../actions/weatherAction';

const initialState = {
  loading: false,
  error: false,
  description: '',
  weatherForecast: {}
};

const reducer = createReducer({}, initialState);

reducer.on(requestWeather, (state) => ({
  ...state,
  loading: true,
  error: false,
}));

reducer.on(requestWeatherSuccess, (state, action) => ({
  ...state,
  weatherForecast: action,
  loading: false,
  error: false,
}));

reducer.on(fetchWeather, (state, action) => ({
  ...state, 
  description: action 
}));

reducer.on(requestWeatherError, (state) => ({
  ...state,
  loading: false,
  error: true,
}));

export default reducer;