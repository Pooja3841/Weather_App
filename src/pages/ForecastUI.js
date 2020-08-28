import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class ForecastUI extends Component {
  render() {
    let time;
    var date = new Date(this.props.detail.dt * 1000);
    var month = new Array();
    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    var dayw = weekday[date.getDay()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = '0' + date.getMinutes();
    time = hours + ':' + minutes.substr(-2);
    return (
      <View style={styles.card}>
        <Text style={[styles.notes, {alignSelf: 'center'}]}>
          {this.props.location}
        </Text>

        <View style={styles.timecontainer}>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>

        <View style={styles.descriptioncont}>
          <Text style={styles.day}>{dayw}</Text>

          <Text style={styles.notes}>
            {this.props.detail.weather[0].description}
          </Text>
          <Text style={styles.notes}>
            {Math.round(this.props.detail.main.temp * 10) / 10}&#8451;
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'skyblue',
    borderWidth: 0,
    flex: 1,
    marginVertical: 20,
    borderRadius: 10,
  },
  time: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
  day: {
    fontSize: 20,
    color: '#fff',
    marginHorizontal: 10,
  },
  timecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptioncont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notes: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 10,
    textTransform: 'capitalize',
  },
});
