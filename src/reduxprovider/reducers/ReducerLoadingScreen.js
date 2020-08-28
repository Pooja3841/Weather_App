import * as ActionTypes from '../actions/index';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  const {type, isLoading} = action;
  switch (type) {
    case ActionTypes.IS_LOADING:
      return {isLoading: isLoading};
    default:
      return state;
  }
};
