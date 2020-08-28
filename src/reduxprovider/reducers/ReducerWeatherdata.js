import * as ActionTypes from '../actions/index';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.WEATHER_DATA:
      return action.data;

    default:
      return state;
  }
};
