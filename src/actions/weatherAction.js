import { createAction } from 'redux-act';
import { takeEvery, put, call } from 'redux-saga/effects';
import { createReducer } from 'redux-act';
import {store} from '../index';

const WEATHER_KEY = "abfeb1f7e3de9fa66f370719f0bbc0c2";

const initialState = {
  loading: false,
  error: false,
  description: '',
  weatherForecast: {}
};

const reducer = createReducer({}, initialState);

export const requestWeather = createAction('REQUESTED_WEATHER');
export const requestWeatherSuccess = createAction('REQUESTED_WEATHER_SUCCEEDED');
export const fetchWeather = createAction('FETCHED_WEATHER');
export const requestWeatherError = createAction('REQUESTED_WEATHER_FAILED');

export function* watchFetchWeather() {
  yield takeEvery(fetchWeather.getType(), fetchWeatherAsync);
}

export function* fetchWeatherAsync() {
  try {
    const {description} = yield store.getState();
    yield put(requestWeather());
    const data = yield call(() => {
      return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${description}&APPID=${WEATHER_KEY}&units=metric`)
        .then(res => res.json())
    }
    );
    yield put(requestWeatherSuccess(data));
  } catch (error) {
    yield put(requestWeatherError());
  }
}

export default reducer;