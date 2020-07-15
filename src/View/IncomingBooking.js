import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const IncomingBooking = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            {/* item 1 */}
            <View style={styles.item} >
                <View style={styles.renterInfor}>
                    <Image style={styles.renterAvatar}
                        source={require('../../assets/image/avatar.png')} />
                    <View style={styles.infor}>
                        <Text style={styles.name}>Võ Thị Kim Thùy</Text>
                        <Text style={styles.phone}>0378.034.064</Text>
                    </View>
                    <TouchableOpacity style={styles.btnViewDetail} onPress={() => navigation.navigate("DetailBooking")}>
                        <Image style={{width: '100%', height: '100%'}}
                            source={require('../../assets/image/booking-viewDetail.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.time}>11:00 - 11:30</Text>
                    <TouchableOpacity style={styles.hostelType} onPress={() => navigation.navigate("DetailBooking")}>
                        <Text style={styles.hostelTypeName}>Phòng trọ gác lửng có máy lạnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* other item */}
            <View style={styles.item}>
                <View style={styles.renterInfor}>
                    <Image style={styles.renterAvatar}
                        source={require('../../assets/image/avatar.png')} />
                    <View style={styles.infor}>
                        <Text style={styles.name}>Võ Thị Kim Thùy</Text>
                        <Text style={styles.phone}>0378.034.064</Text>
                    </View>
                    <Image style={styles.btnViewDetail}
                        source={require('../../assets/image/booking-viewDetail.png')} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.time}>11:00 - 11:30</Text>
                    <TouchableOpacity style={styles.hostelType}>
                        <Text style={styles.hostelTypeName}>Phòng trọ gác lửng có máy lạnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.renterInfor}>
                    <Image style={styles.renterAvatar}
                        source={require('../../assets/image/avatar.png')} />
                    <View style={styles.infor}>
                        <Text style={styles.name}>Võ Thị Kim Thùy</Text>
                        <Text style={styles.phone}>0378.034.064</Text>
                    </View>
                    <Image style={styles.btnViewDetail}
                        source={require('../../assets/image/booking-viewDetail.png')} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.time}>11:00 - 11:30</Text>
                    <TouchableOpacity style={styles.hostelType}>
                        <Text style={styles.hostelTypeName}>Phòng trọ gác lửng có máy lạnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.renterInfor}>
                    <Image style={styles.renterAvatar}
                        source={require('../../assets/image/avatar.png')} />
                    <View style={styles.infor}>
                        <Text style={styles.name}>Võ Thị Kim Thùy</Text>
                        <Text style={styles.phone}>0378.034.064</Text>
                    </View>
                    <Image style={styles.btnViewDetail}
                        source={require('../../assets/image/booking-viewDetail.png')} />
                </View>
                <View style={styles.detail}>
                    <Text style={styles.time}>11:00 - 11:30</Text>
                    <TouchableOpacity style={styles.hostelType}>
                        <Text style={styles.hostelTypeName}>Phòng trọ gác lửng có máy lạnh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default IncomingBooking

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFF1F7',
        paddingLeft: 30,
        paddingRight: 30,
    },
    item: {
        marginTop: 20,
        height: 170,
        backgroundColor: '#ffffff',
        borderRadius: 8,
    },
    renterInfor: {
        height: '45%',
        flexDirection: "row",
        paddingLeft: 20,
    },
    renterAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: "center",
    },
    infor: {
        width: '70%',
        left: 20,
        top: 20,

    },
    name: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'lato-regular',
    },
    phone: {
        color: '#0BA0EF',
        fontSize: 15,
        fontFamily: 'lato-regular',
    },
    btnViewDetail: {
        width: 25,
        height: 20,
        top: 20,
    },
    detail: {
        height: '55%',
        top: 5,
        left: 20,
        marginRight: 40,
        borderTopColor: '#E4EEF4',
        borderTopWidth: 2,
    },
    time: {
        top: 7,
        fontFamily: 'lato-medium',
        color: '#636272',
    },
    hostelType: {
        backgroundColor: '#FFF5E6',
        top: 15,
        height: 40,
        alignItems: "center",
        borderRadius: 5,
        paddingTop: 10,
    },
    hostelTypeName: {
        color: '#EF7239',
        fontFamily: 'lato-medium',
        textAlign: "center",
    },
})
