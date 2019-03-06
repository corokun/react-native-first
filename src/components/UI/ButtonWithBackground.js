import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const buttonWithBackground = props => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={[styles.button, ]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5
  }
});

export default buttonWithBackground;