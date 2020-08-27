import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Forecast from './src/pages/Forecast';

export default class App extends Component {
  render() {
    return (
      <View>
        <Forecast />
      </View>
    );
  }
}
