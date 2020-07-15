import React, { Fragment } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

const ViewQRCode = () => {
    return (
        <Fragment>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.iconClose}
                        source={require('../../assets/image/close.png')} />
                    <Text style={styles.headerName}>Mã QR</Text>
                </View>
                <View style={styles.containerQR}>
                    <QRCode value="thanh thang" size={300} />
                </View>
            </View>
        </Fragment>
    )
}

export default ViewQRCode

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        height: "100%",
    },
    header: {
        height: 60,
        backgroundColor: '#ffffff',
        flexDirection: "row",
        paddingLeft: 20,
        borderBottomColor: '#F1F4F9',
        borderBottomWidth: 3,
    },
    iconClose: {
        width: 15,
        height: 20,
        alignSelf: "center",
    },
    headerName: {
        color: '#EF7239',
        alignSelf: "center",
        fontFamily: 'lato-semibold',
        fontSize: 14,
        paddingLeft: '20%'
    },
    containerQR: {
        backgroundColor: "#ffffff",
        width: "100%", height: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
})
