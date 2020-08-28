import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Loader from '../components/Loader';
import {WeatherDataAPI} from '../reduxprovider/actions/ActionWeatherdata';
import {connect} from 'react-redux';
import ForecastUI from './ForecastUI';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: '',
      error: '',
      isloading: false,
      iserror: false,
    };
  }

  UNSAFE_componentWillMount() {
    // Get the user's location
    this.setState({isloading: true});
    this.props.WeatherDataAPI();
  }
  getdate(date) {
    console.log(date);
    var date = new Date(date * 1000);

    return <Text>{date}</Text>;
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('data------->', nextProps.ReducerWeatherdata.status);

    if (nextProps.ReducerWeatherdata.status === 200) {
      this.setState({isloading: false});
      var data = nextProps.ReducerWeatherdata.data;
      this.setState({forecast: data}),
        () => {
          console.log(this.state.forecast);
        };
      // var date = new Date(forecast.detail.dt * 1000);

      // var hours = date.getHours();

      // var minutes = '0' + date.getMinutes();

      // time = hours + ':' + minutes.substr(-2);
      // console.log(date, hours, minutes, time);
    } else {
      this.setState({iserror: true});
      this.setState({isloading: false});
    }
  }
  render() {
    const {isloading, iserror, forecast} = this.state;

    return isloading ? (
      <Loader isloading={isloading} />
    ) : (
      <View style={{flex: 1}}>
        {!iserror ? (
          <FlatList
            data={forecast.list}
            style={{marginTop: 20}}
            keyExtractor={(item) => item.dt_txt}
            renderItem={({item}) => (
              <ForecastUI
                detail={item}
                location={this.state.forecast.city.name}
              />
            )}
          />
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.errorCont}>
              <Text style={styles.errortest}>
                Something went wrong at our End
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                this.setState({isloading: true});
                this.props.WeatherDataAPI();
              }}
              style={styles.btncontainer}>
              <Text style={styles.retrytest}>Retry</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  errortest: {
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  errorCont: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0.5,
  },
  btncontainer: {
    height: 30,
    width: 60,
    borderWidth: 0.5,
    marginVertical: 20,
    alignSelf: 'center',
  },
  retrytest: {
    alignSelf: 'center',
    padding: 4,
  },
});

const mapStateToProps = (state) => {
  return {
    ReducerWeatherdata: state.ReducerWeatherdata,
    ReducerLoadingScreen: state.ReducerLoadingScreen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    WeatherDataAPI: (data) => dispatch(WeatherDataAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
