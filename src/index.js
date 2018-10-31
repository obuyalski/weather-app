import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
import { watchFetchWeather } from './actions/weatherAction';
import reducer from './reducers/index';
import App from './App';
import './styles/index.css';
import './styles/card.css';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchFetchWeather);

  const ConnectedApp = connect((state) => {
    return state;
  })(App);

ReactDOM.render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));
serviceWorker.unregister();