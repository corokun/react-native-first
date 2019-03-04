import React from 'react'
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

// Register Screens
import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace';
import SharePlaceScreen from './src/screens/SharePlace';
import PlaceDetailScreen from './src/screens/PlaceDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("AuthScreen", () => (props) => (
  <Provider store={store}>
    <AuthScreen {...props} />
  </Provider>
), () => AuthScreen);
Navigation.registerComponent("FindPlaceScreen", () => (props) => (
  <Provider store={store}>
    <FindPlaceScreen {...props} />
  </Provider>
), () => FindPlaceScreen);
Navigation.registerComponent("SharePlaceScreen", () => (props) => (
  <Provider store={store}>
    <SharePlaceScreen {...props} />
  </Provider>
), () => SharePlaceScreen);
Navigation.registerComponent("PlaceDetailScreen", () => (props) => (
  <Provider store={store}>
    <PlaceDetailScreen {...props} />
  </Provider>
), () => PlaceDetailScreen);

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
        }]
      }
    }
  });
});