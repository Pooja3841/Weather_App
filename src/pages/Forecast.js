import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Loader from '../components/Loader';

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
    };
  }

  componentDidMount() {
    this.setState({isloading: true});
  }

  render() {
    const {isloading} = this.state;

    return isloading ? <Loader isloading={isloading} /> : <Text>hello</Text>;
  }
}
