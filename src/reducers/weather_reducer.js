import { FETCH_WEATHER } from '../actions/index';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]
      break;
    default:
      return state;
  }
};

export default weatherReducer;
