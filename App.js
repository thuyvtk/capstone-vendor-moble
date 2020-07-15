import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Overview from './src/View/Overview';
import Login from './src/View/Login';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/View/Dashboard';
import DetailBooking from './src/View/DetailBooking';
import ViewQRCode from './src/View/ViewQRCode';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" headerMode={null}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ViewQRCode" component={ViewQRCode} />
      <Stack.Screen name="DetailBooking" component={DetailBooking} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
