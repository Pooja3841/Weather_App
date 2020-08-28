import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Forecast from './src/pages/Forecast';
import {Provider} from 'react-redux';
import {store, persistor} from './src/reduxprovider/store';
import {PersistGate} from 'redux-persist/integration/react';
import {connect} from 'react-redux';
const RouterWithRedux = connect()(Forecast);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterWithRedux navigationBarStyle={{backgroundColor: '#5dca67'}}>
            <Forecast />
          </RouterWithRedux>
        </PersistGate>
      </Provider>
    );
  }
}
