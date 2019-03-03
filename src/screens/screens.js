import React from 'react'
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

// Register Screens
import AuthScreen from './Auth';
import FindPlaceScreen from './FindPlace';
import SharePlaceScreen from './SharePlace';

export function registerScreens(storeState = store) {
  Navigation.registerComponent("AuthScreen", () => (props) => (
    <Provider store={storeState}>
      <AuthScreen {...props} />
    </Provider>
  ), () => AuthScreen);
  Navigation.registerComponent("FindPlaceScreen",  () => (props) => (
    <Provider store={storeState}>
      <FindPlaceScreen {...props} />
    </Provider>
  ),() => FindPlaceScreen);
  Navigation.registerComponent("SharePlaceScreen", () => (props) => (
    <Provider store={storeState}>
      <SharePlaceScreen {...props} />
    </Provider>
  ), () => SharePlaceScreen);
}
