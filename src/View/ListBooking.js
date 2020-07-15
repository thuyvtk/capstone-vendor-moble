import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Header from '../components/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IncomingBooking from './IncomingBooking';
import DatePicker from 'react-native-datepicker';
// import {Picker} from '@react-native-community/picker';
// import RNPickerSelect from 'react-native-picker-select'

const Tab = createMaterialTopTabNavigator();

const getCurrentDate=()=>{
  var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      return date + '-' + month + '-' + year;
}

const ListBooking = () => {
  const [hostelGroup, setHostelGroup] = useState('1');
  const [date, setDate] = useState(getCurrentDate())

  return (
    <Fragment>
      <Header title="LỊCH XEM PHÒNG" />
      {/* hostel group */}
      <View style={styles.hostelGroup}>
        <View style={styles.hgInfor}>
          <Image
            source={require('../../assets/image/lalahome.png')}
            style={styles.hgLogo}
          />
          <View style={styles.hgDetail}>
            <Text style={styles.hgName}>Nhà trọ Lalahome</Text>
            <Text style={styles.hgAddress}>
              618/13 Quang Trung, phường 11, Gò Vấp, HCM
            </Text>
          </View>
          <View style={styles.picker}>
            <Image
              style={styles.pickerIcon}
              source={require('../../assets/image/listbooking-down-arrow.png')}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btnEditSchedule}>
          <Text style={styles.txtEditSchedule}>Quản lí lịch rảnh</Text>
        </TouchableOpacity>
        <DatePicker
          style={{ width: "100%", top: 20, height: 100}}
          date={date}
          mode="date" 
          format="DD-MM-YYYY"
          // minDate={state}
          // maxDate="01-01-2019"
          // confirmBtnText="Confirm"
          // cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderWidth: 0,
              alignItems: "flex-end",
              
            },
            dateText: {
              // color: '#1F17FF',
              fontFamily: 'lato-semibold'
            }
          }}
          onDateChange={d => setDate(d)}
        />
      </View>
      {/* list booking */}
      <View style={styles.listBooking}>
        <Tab.Navigator lazy='true'>
          <Tab.Screen name="Sắp tới" component={IncomingBooking} />
          <Tab.Screen name="Đã gặp" component={IncomingBooking} />
          <Tab.Screen name="Lỡ hẹn" component={IncomingBooking} />
          <Tab.Screen name="Hủy" component={IncomingBooking} />
        </Tab.Navigator>
      </View>
    </Fragment>
  );
};

export default ListBooking;

const styles = StyleSheet.create({
  hostelGroup: {
    height: 220,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  hgInfor: {
    height: 80,
    flexDirection: 'row',
  },
  btnEditSchedule: {
    height: 50,
    borderColor: '#97C2FC',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '35%',
  },
  txtEditSchedule: {
    fontFamily: 'lato-medium',
    color: '#97C2FC',
    fontSize: 15,
  },
  hgLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  hgDetail: {
    width: '75%',
    left: 20,
    paddingRight: 30,
  },
  hgName: {
    color: '#415B79',
    fontFamily: 'lato-semibold',
    fontSize: 17,
  },
  hgAddress: {
    color: '#A8B4C1',
    fontSize: 13,
  },
  picker: {
    width: 30,
    backgroundColor: '#2E83F8',
    borderRadius: 50,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  pickerIcon: {
    height: '50%',
    width: '50%',
    alignSelf: 'center',
    marginLeft: '25%',
  },

  listBooking: {
    flex: 3,
    backgroundColor: 'black',
  },
});
