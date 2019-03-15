import React, { Component } from 'react';
import { View, Button, StyleSheet, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { connect } from 'react-redux';
import { addPlace } from '../store/actions/places';

import PickImage from '../components/PickImage';
import PickLocation from '../components/PickLocation';
import PlaceInput from '../components/PlaceInput';

import MainText from '../components/UI/MainText';
import HeadingText from '../components/UI/HeadingText';

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  state = {
    placeName: '',
  };

  navigationButtonPressed({ buttonId }) {
    if (buttonId === 'sideDrawerToggle') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val,
    });
  };

  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button title="Share the Place!" onPress={this.placeAddedHandler} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  button: {
    margin: 8,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
});

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
