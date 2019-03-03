import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

AppRegistry.registerComponent('rncourse', () => (props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
), () => App);