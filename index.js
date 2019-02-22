/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
// import { Provider } from 'react-redux';
// import App from './App';


// import configureStore from './src/store/configureStore';

// const store = configureStore();

// const RNRedux = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth';
Navigation.registerComponent('AuthScreen', () => AuthScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'AuthScreen',
            options: {
              topBar: {
                title: {
                  text: 'Login',
                  alignment: 'center'
                }
              }
            }
          }
        }],
      }
    }
  });
});
