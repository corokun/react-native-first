import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Icons are necessary to render on Android

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
    Icon.getImageSource(
      Platform.OS === 'android' ? 'md-share-alt' : 'ios-share',
      30
    ),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30),
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              id: 'sideDrawerId',
              name: 'SideDrawer',
            },
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          id: 'findPlaceId',
                          name: 'FindPlaceScreen',
                          options: {
                            topBar: {
                              title: {
                                text: 'Find Place',
                                alignment: 'center',
                              },
                              leftButtons: [
                                {
                                  id: 'sideDrawerToggle',
                                  icon: sources[2],
                                  color: 'orange',
                                  title: 'Menu',
                                },
                              ],
                            },
                            bottomTab: {
                              text: 'Find Place',
                              icon: sources[0],
                              ...Platform.select({
                                android: {
                                  selectedIconColor: '#F6568E',
                                  selectedTextColor: '#F6568E',
                                },
                                ios: {
                                  selectedIconColor: 'orange',
                                  selectedTextColor: 'orange',
                                },
                              }),
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          id: 'sharePlaceId',
                          name: 'SharePlaceScreen',
                          options: {
                            topBar: {
                              title: {
                                text: 'Share Place',
                                alignment: 'center',
                              },
                              leftButtons: [
                                {
                                  id: 'sideDrawerToggle',
                                  icon: sources[2],
                                  color: 'orange',
                                  title: 'Menu',
                                },
                              ],
                            },
                            bottomTab: {
                              text: 'Share Place',
                              icon: sources[1],
                              ...Platform.select({
                                android: {
                                  selectedIconColor: '#F6568E',
                                  selectedTextColor: '#F6568E',
                                },
                                ios: {
                                  selectedIconColor: 'orange',
                                  selectedTextColor: 'orange',
                                },
                              }),
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    });
  });
};

export default startMainTabs;
