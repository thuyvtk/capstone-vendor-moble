import React, {Fragment} from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
const Overview = () => {
  return (
    <Fragment>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            style={styles.logo}
            source={require('../../assets/image/logo.png')}
          />
          <Text style={styles.page}>TỔNG QUAN</Text>
        </View>
        <Image
          style={styles.iconNotification}
          source={require('../../assets/image/overview_notification.png')}
        />
      </View>
      {/* list incoming booking */}
      <View style={styles.incomingBooking}>
        {/* header */}
        <View style={styles.incomingBooking_title}>
          <Text style={styles.incomingBooking_title_lb}>Lịch hẹn sắp tới</Text>
          <Text style={styles.incomingBooking_title_more}>Xem thêm</Text>
        </View>
        {/* list */}
        <View style={styles.incomingBooking_list}>
          <View style={styles.incomingBooking_list_item}>
            <ImageBackground
              source={require('../../assets/image/background_booking_item.png')}
              style={styles.background}>
              <View style={styles.time}>
                <Text style={styles.day}>Ngày mai</Text>
                <View>
                  <Text  style={styles.date}>09/07/2020</Text>
                  <Text  style={styles.date}>10h</Text>
                </View>
              </View>
              <View style={styles.renter}>
                <Image
                source={require('../../assets/image/logo.png')}
                />
              </View>
              <View style={styles.hostel_group}>

              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

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
    height: 270,
    backgroundColor: '#ffffff',
  },
  incomingBooking_title: {
    top: 20,
    flexDirection: 'row',
    left: 20,
    height: 50,
    alignItems: 'center',
    flex: 1,
  },
  incomingBooking_title_lb: {
    fontFamily: 'lato-medium',
    fontSize: 16,
    letterSpacing: -0.5,
    color: '#1B3A5E',
    flex: 4,
  },
  incomingBooking_title_more: {
    textAlign: 'right',
    flex: 5,
    marginRight: 40,
    fontFamily: 'lato-medium',
    fontSize: 12,
    color: '#74879D',
  },
  incomingBooking_list: {
    flex: 3,
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 20,
  },
  incomingBooking_list_item: {
    width: 300,
    borderRadius: 15,
    overflow: 'hidden',
  },
  background: {
    width: 300,
    borderRadius: 15,
    overflow: 'hidden',
    height: '100%',
  },
  time: {
    height: '30%',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    paddingTop: 10,
  },
  day: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'lato-medium',
    flex: 1,
  },
  date: {
    fontSize: 11,
    color: '#ffffff',
    fontFamily: 'lato-medium',
    flex: 1,
    textAlign: "right",
  },
  renter: {
    height: '35%',
    flexDirection: "row",
  },
  hostel_group: {
      height: '35%',
      backgroundColor: 'red',
  }
});

export default Overview;
