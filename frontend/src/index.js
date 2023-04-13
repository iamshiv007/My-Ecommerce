import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import axios from 'axios'

axios.defaults.withCredentials = true

const options = {
  time0ut: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}


ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
