import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../components/PlaceList';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "sideDrawerToggle") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      })
    }
  }

  itemSelectedHandler = key => {
    const selectedPlace = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: 'PlaceDetailScreen',
        passProps: {
          selectedPlace: selectedPlace
        },
        options: {
          topBar: {
            title: {
              text: selectedPlace.name
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);