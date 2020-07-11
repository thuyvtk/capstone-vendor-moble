import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderBottomColor: '#F1F4F9',
    borderBottomWidth: 3,
  },
  headerLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 70,
    height: 67,
  },
  page: {
    color: '#6C98C6',
    fontFamily: 'Nunito',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: -0.05,
    fontStyle: 'normal',
    marginLeft: 15,
  },
  iconNotification: {
    marginLeft: 150,
    alignSelf: 'center',
    width: 20,
    height: 20,
  },

  incomingBooking: {
    height: 200,
    backgroundColor: '#ffffff',
  },
  incomingBooking_title: {
    top: 40, 
    flexDirection: "row",
    left: 20,
  },
  incomingBooking_title_lb: {
    fontFamily: "Nunito",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: -0.5,
    color: '#1B3A5E',
    flex: 4,
  },
  incomingBooking_title_more: {
    textAlign: 'right',
    alignSelf: "flex-end",
    flex: 5,
    marginRight: 40,
    fontFamily: "Lato",
    fontSize: 12,
    color: '#74879D',
  },
});

export class App extends Component {
  render() {
    return (
      <Fragment>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              style={styles.logo}
              source={require('./android/app/src/main/image/logo.png')}
            />
            <Text style={styles.page}>TỔNG QUAN</Text>
          </View>
          <Image
            style={styles.iconNotification}
            source={require('./android/app/src/main/image/overview_notification.png')}
          />
        </View>
        {/* list incoming booking */}
        <View style={styles.incomingBooking}>
          <View style={styles.incomingBooking_title}>
            <Text style={styles.incomingBooking_title_lb}>Lịch hẹn sắp tới</Text>
            <Text style={styles.incomingBooking_title_more}>Xem thêm</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

export default App;
