import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Overview from './Overview';
import Login from './Login';
import ListBooking from './ListBooking';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tổng quan" component={Overview} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Lịch xem phòng" component={ListBooking} />
    </Tab.Navigator>
  );
};

export default Dashboard;
