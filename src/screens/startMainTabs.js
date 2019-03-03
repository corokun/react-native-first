import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// Icons are necessary to render on Android

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30)
  ]).then(sources => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'FindPlaceScreen',
                        options: {
                          topBar: {
                            title: {
                              text: 'Find Place'
                            }
                          },
                          bottomTab: {
                            text: 'Find Place',
                            icon: sources[0]
                          }
                        }
                      },
                    },
                  ]
                }
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'SharePlaceScreen',
                        options: {
                          topBar: {
                            title: {
                              text: 'Share Place'
                            }
                          },
                          bottomTab: {
                            text: 'Share Place',
                            icon: sources[1]
                          }
                        }
                      },
                    },
                  ]
                }
              }
            ]
          }
        }
      })
    })
}

export default startMainTabs;