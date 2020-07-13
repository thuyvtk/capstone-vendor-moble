import React from 'react';
import {View, Text, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderBottomColor: '#F1F4F9',
        borderBottomWidth: 3,
      }}>
      <View style={{width: '20%'}}>
        <Image
          style={{width: 70, height: 67}}
          source={require('../../assets/image/logo.png')}
        />
      </View>
      <View style={{width: '70%'}}>
        <Text
          style={{
            fontFamily: 'lato-medium',
            color: '#6C98C6',
            fontSize: 16,
            letterSpacing: -0.5,
          }}>
          {title}
        </Text>
      </View>
      <View style={{width: '10%'}}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../assets/image/overview_notification.png')}
        />
      </View>
    </View>
  );
};

export default Header;
