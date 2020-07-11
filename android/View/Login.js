import React, {Component, Fragment} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#ffffff",
    flex: 2,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    top: 70,
  },
  thumnailContainer: {
    flex: 4, 
    alignContent: 'center', 
    backgroundColor: 'white',
    alignItems: "center",
  },
  thumnailLogin: {
    width: 300,
    height: 300,
    top: 20,
  },
  containerButton: {
    backgroundColor: '#ffffff',
    flex: 3,
  },
  buttonLogin: {
    backgroundColor: "#6C98C6",
    width: 250,
    height: 50,
    alignSelf: "center",
    top: 40,
    borderRadius: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSignin: {
    backgroundColor: "#EFF1F7",
    width: 250,
    height: 50,
    alignSelf: "center",
    top: 40,
    borderRadius: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  txtLogin: {
    fontFamily: "Lato",
    color: '#ffffff',
    
  },
  txtSignin: {
    fontFamily: "Lato",
    color: '#000000',
    
  },
  iconLogin: {
    width: 25,
    height: 25,
    left: -50,
  },
  iconSignin: {
    width: 25,
    height: 25,
    left: -50,
  }
  
});

export class App extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./android/app/src/main/image/logo.png')}
          />
        </View>
        <View
          style={styles.thumnailContainer}>
          <Image
            style={styles.thumnailLogin}
            source={require('./android/app/src/main/image/thumnail_login.jpg')}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Image
              source={require('./android/app/src/main/image/icons8-change-user-64.png')}
              style={styles.iconLogin}
            />
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSignin}>
            <Image
              source={require('./android/app/src/main/image/icons8-right-50.png')}
              style={styles.iconSignin}
            />
            <Text style={styles.txtSignin}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}

export default App;
