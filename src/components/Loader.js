import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default class Loader extends Component {
  render() {
    const {isloading} = this.props;
    return (
      <View>
        <AnimatedLoader
          visible={isloading}
          overlayColor="rgba(255,255,255,0)"
          source={require('../images/loader.js.json')}
          animationStyle={styles.lottie}
          speed={1}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  lottie: {
    width: 80,
    height: 80,
  },
});
