import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action recieved', action);
  switch (action.type) {
    case FETCH_WEATHER:
      //create an entirely new array and return that instead
      return [action.payload.data, ...state]; //same as state.concat([action.payload.data])
  }
  return state;
}
