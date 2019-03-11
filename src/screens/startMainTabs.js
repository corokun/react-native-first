import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// Icons are necessary to render on Android

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("ios-share-alt", 30),
    Icon.getImageSource("ios-menu", 30)
  ]).then(sources => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            left: {
              component: {
                id: "sideDrawerId",
                name: "SideDrawer"
              }
            },
            center: {
              bottomTabs: {
                children: [
                  {
                    stack: {
                      children: [
                        {
                          component: {
                            id: "findPlaceId",
                            name: 'FindPlaceScreen',
                            options: {
                              topBar: {
                                title: {
                                  text: 'Find Place',
                                  alignment: 'center'
                                },
                                leftButtons: [
                                  {
                                    id: 'sideDrawerToggle',
                                    icon: sources[2],
                                    title: "Menu"
                                  }
                                ]
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
                            id: "sharePlaceId",
                            name: 'SharePlaceScreen',
                            options: {
                              topBar: {
                                title: {
                                  text: 'Share Place',
                                  alignment: 'center'
                                },
                                leftButtons: [
                                  {
                                    id: 'sideDrawerToggle',
                                    icon: sources[2],
                                    title: "Menu"
                                  }
                                ]
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
          }
        }
      })
    })
}

export default startMainTabs;