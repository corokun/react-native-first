import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => dispatch => {
  const placeData = {
    name: placeName,
    location,
  };
  fetch('https://rn-course-1552961879445.firebaseio.com/places.json', {
    method: 'POST',
    body: JSON.stringify(placeData),
  })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
    });
};

export const deletePlace = key => ({
  type: DELETE_PLACE,
  placeKey: key,
});
