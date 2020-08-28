import {combineReducers} from 'redux';
import ReducerLoadingScreen from './ReducerLoadingScreen';
import ReducerWeatherdata from './ReducerWeatherdata';

// combine all reducers
const rootReducer = combineReducers({
  ReducerWeatherdata: ReducerWeatherdata,
  ReducerLoadingScreen: ReducerLoadingScreen,
});

export default rootReducer;
