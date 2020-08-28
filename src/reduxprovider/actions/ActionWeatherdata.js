import * as ActionTypes from './index';
import Geolocation from '@react-native-community/geolocation';
import {create} from 'apisauce';

export function Weatherdata(data) {
  return {
    type: ActionTypes.WEATHER_DATA,
    data,
  };
}

export function WeatherDataAPI() {
  return (dispatch) => {
    Geolocation.getCurrentPosition((position) => {
      let url =
        'https://api.openweathermap.org/data/2.5/forecast?lat=' +
        position.coords.latitude +
        '&lon=' +
        position.coords.longitude +
        '&units=metric&appid=7879299e519b4300e82c6c32780195bf';

      const api = create({
        baseURL: url,
      });
      api
        .get()
        .then((res) => {
          console.log('res', res);

          if (res != '') {
            dispatch(Weatherdata(res));
          } else {
            dispatch(Weatherdata(res));
            alert(res.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };
}
getdata = (latitude, longitude) => {
  console.log('hhhjh');
  let url =
    'https://api.openweathermap.org/data/2.5/forecast?lat=' +
    latitude +
    '&lon=' +
    longitude +
    '&units=metric&appid=7879299e519b4300e82c6c32780195bf';

  const api = create({
    baseURL: url,
  });
  api
    .get()
    .then((res) => {
      console.log('res', res);
      alert(res.message);

      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
