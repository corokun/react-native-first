import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from './ListItem';

const placeList = (props) => {
  return (
    <FlatList 
      style={styles.listContainer}
      data={props.places}
      renderItem={() => (
        <ListItem 
          key={i} 
          placeName={place} 
          onItemPressed={() => props.onItemDeleted(i)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flex: 1
  }
});

export default placeList;