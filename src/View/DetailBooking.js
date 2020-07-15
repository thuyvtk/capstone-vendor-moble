import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Picker } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { round } from 'react-native-reanimated'
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from '@react-navigation/native'
import ViewQRCode from './ViewQRCode'

const DetailBooking = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View style={styles.header}>
                <Image style={styles.headerBack} source={require('../../assets/image/bookingDetail-back.png')} />
                <Text style={styles.headerName}>THÔNG TIN LỊCH HẸN</Text>
            </View>
            {/* QR code */}
            <View style={styles.qrContainer}>
                {/* <View style={styles.qrcode}> */}
                <TouchableOpacity onPress={() => navigation.navigate("ViewQRCode")}
                    style={styles.qrcode}>
                    <Image
                        style={styles.qrcodeImg}
                        source={require('../../assets/image/qrcode.png')} />
                </TouchableOpacity>
                {/* </View> */}
                <View style={styles.hostelType}>
                    <Text style={styles.hostelName}>Phòng trọ gác lửng có máy lạnh</Text>
                </View>
                <TouchableOpacity style={styles.btnViewQRcode}>
                    <Text style={styles.lbViewQRcode}>CHI TIẾT MÃ LỊCH HẸN</Text>
                </TouchableOpacity>
            </View>
            {/* time */}
            <View style={styles.container}>
                <Text style={styles.lable}>Thời gian đến</Text>
                <View style={styles.timeDetail}>
                    {/* date */}
                    <View style={styles.dateBooking}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon}
                                source={require('../../assets/image/calendar.png')} />
                        </View>
                        <Text style={styles.text}>06/07/2020</Text>
                    </View>
                    {/* time */}
                    <View style={styles.dateBooking}>
                        <View style={styles.iconContainer}>
                            <Image style={styles.icon}
                                source={require('../../assets/image/clock.png')} />
                        </View>
                        <Text style={styles.text}>11:00 - 11:30</Text>
                    </View>
                </View>
            </View>
            {/* renter infor */}
            <View style={styles.container}>
                <Text style={styles.lable}>Thông tin khách thuê</Text>
                <View style={styles.renterDetail}>
                    <View style={styles.infor}>
                        <Image style={styles.renterAvatar}
                            source={require('../../assets/image/avatar.png')} />
                        <View style={styles.renterInfor}>
                            {/* phone */}
                            <View style={styles.dateBooking}>
                                <View style={styles.iconContainer}>
                                    <Image style={styles.icon}
                                        source={require('../../assets/image/phone.png')} />
                                </View>
                                <Text style={styles.text}>0378.034.064</Text>
                            </View>
                            {/* time */}
                            <View style={styles.dateBooking}>
                                <View style={styles.iconContainer}>
                                    <Image style={styles.icon}
                                        source={require('../../assets/image/email.png')} />
                                </View>
                                <Text style={styles.text}>vokimthuy@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnDone}>
                        <Text style={styles.lbDone}>ĐÃ GẶP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* hosteltype infor */}
            <View style={styles.container}>
                <Text style={styles.lable}>Thông tin phòng trọ</Text>
                <View style={styles.hosteltypeDetail}>
                    <View style={styles.infor}>
                        <Image style={styles.hosteltypeImg}
                            source={require('../../assets/image/thumnail.png')} />
                        <View style={styles.hosteltypePrice}>
                            <Text style={styles.lableHostel}>Giá</Text>
                            <Text style={styles.price}>1.900.000 đ</Text>
                            <TouchableOpacity style={styles.btnDetailHostel}>
                                <Text style={styles.lbDetailHostel}>XEM CHI TIẾT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.htDetailInfor}>
                        <View style={styles.typeInfor}>
                            <Text style={styles.lableHostel}>Nhà trọ</Text>
                            <Text style={styles.text}>Nhà trọ Lalahome</Text>
                        </View>
                        <View style={styles.typeInfor}>
                            <Text style={styles.lableHostel}>Loại phòng</Text>
                            <Text style={styles.text}>Phòng trọ gác lửng có máy lạnh</Text>
                        </View>
                        <View style={styles.typeInfor}>
                            <Text style={styles.lableHostel}>Địa chỉ</Text>
                            <Text style={styles.text}>1426/39 Nguyễn Duy Trinh, Long Trường, Quận 9, HCM</Text>
                        </View>
                        <View style={styles.dropdown}>
                            <DropDownPicker
                                items={[
                                    { label: 'B1', value: 'item1', disabled: true, disabled: true },
                                    { label: 'B1', value: 'item1', disabled: true, disabled: true },
                                    { label: 'B1', value: 'item1', disabled: true, disabled: true },
                                    { label: 'B1', value: 'item1', disabled: true, disabled: true },
                                    { label: 'B1', value: 'item1', disabled: true, disabled: true },

                                ]}
                                defaultIndex={0}
                                containerStyle={{ height: 40 }}
                                placeholder='Phòng trống'
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailBooking

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#6C98C6',
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
        borderBottomColor: '#F1F4F9',
        borderBottomWidth: 3,
    },
    headerName: {
        color: '#ffffff',
        alignSelf: "center",
        fontFamily: 'lato-semibold',
        fontSize: 14,
        paddingLeft: '20%'
    },
    headerBack: {
        width: '5%',
        height: 15,
    },

    qrContainer: {
        backgroundColor: '#EFF1F7',
        height: 250,
        paddingTop: 20,
    },

    qrcode: {
        width: 90,
        height: 90,
        backgroundColor: '#ffffff',
        alignSelf: "center",
        marginTop: 20,
        justifyContent: "center",
    },
    qrcodeImg: {
        width: '90%',
        height: '90%',
        alignSelf: "center",
    },

    hostelType: {
        justifyContent: "center",
        marginTop: 10,
        height: 50,
    },
    hostelName: {
        alignSelf: "center",
        fontSize: 15,
        color: '#EF7239',
        fontFamily: 'lato-bold',
        width: '75%',
        textAlign: "center",
    },
    btnViewQRcode: {
        width: '50%',
        height: 40,
        alignSelf: "center",
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#2D7FEF',
        borderRadius: 10,
    },
    lbViewQRcode: {
        color: '#2D7FEF',
    },

    container: {
        marginTop: 30,
        left: 30,
    },
    timeDetail: {
        width: "80%",
        height: 80,
        borderColor: '#E3EEF4',
        borderWidth: 1.5,
        marginTop: 10,
        borderRadius: 7,
        paddingLeft: 20,

    },
    renterDetail: {
        width: "80%",
        height: 150,
        borderColor: '#E3EEF4',
        borderWidth: 1.5,
        marginTop: 10,
        borderRadius: 7,
        paddingLeft: 20,
        paddingTop: 10,

    },
    hosteltypeDetail: {
        width: "80%",
        height: 550,
        borderColor: '#E3EEF4',
        borderWidth: 1.5,
        marginTop: 10,
        borderRadius: 7,
        paddingLeft: 20,
        paddingTop: 10,
        marginBottom: 50,

    },
    infor: {
        flexDirection: "row",
    },
    dateBooking: {
        paddingTop: 10,
        flexDirection: "row",
        width: "80%",
    },
    iconContainer: {
        width: 25,
        height: 25,
        backgroundColor: '#E3EEF4',
        borderRadius: 40,
        justifyContent: "center",
        marginRight: 20,
    },
    icon: {
        width: "40%",
        height: "40%",
        alignSelf: "center",
    },

    lable: {
        color: '#818286',
        fontFamily: 'lato-regular',
        fontSize: 15,
    },
    text: {
        color: '#1F17FF',
        fontFamily: 'lato-semibold',
    },
    renterAvatar: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    hosteltypeImg: {
        width: 110,
        height: 95,
        borderRadius: 5,
    },
    renterInfor: {
        width: "90%",
        marginLeft: 20,
    },
    btnDone: {
        marginTop: 15,
        // borderColor: 'red',
        // borderWidth: 2,
        height: 40,
        marginRight: 20,
        backgroundColor: '#FFF5E6',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF5E6",
    },
    lbDone: {
        color: '#EF7239',
        fontFamily: 'lato-semibold',
        letterSpacing: 0.5,
    },
    hosteltypePrice: {
        width: "50%",
        marginLeft: 20,
    },
    price: {
        color: '#EF7239',
        fontFamily: 'lato-bold',
        fontSize: 17,
    },
    btnDetailHostel: {
        width: 150,
        height: 35,
        backgroundColor: '#7794F8',
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 5,
    },
    lbDetailHostel: {
        color: '#ffffff',
        textAlign: "center",
        fontFamily: 'lato-semibold',
        letterSpacing: 0.5,
    },
    htDetailInfor: {
        height: 200,
    },
    lableHostel: {
        color: '#B4B7C8',
        fontFamily: 'lato-regular',
    },
    typeInfor: {
        marginTop: 20,
    },
    dropdown: {
        marginTop: 20,
        marginRight: 20,
    }
})
