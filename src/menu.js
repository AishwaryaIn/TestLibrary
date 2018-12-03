import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base'
export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button full transparent style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("DeviceLock");
                }}>
                    <Text style={styles.txt}>{"Device Lock Screen"}</Text>
                </Button>
                <Button full transparent style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("MobileAuthentication")
                }}>
                    <Text style={styles.txt}>{"Mobile Authentication Screen"}</Text>
                </Button>
                <Button full transparent style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("OTPScreen")
                }}>
                    <Text style={styles.txt}>{"OTP Screen"}</Text>
                </Button>
                <Button full transparent style={styles.btn} onPress={() => {
                    this.props.navigation.navigate("EmailAuthentication")
                }}>
                    <Text style={styles.txt}>{"Email Authentication Screen"}</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aec4e8',
    },
    btn: {
        margin: 20,
        backgroundColor: "#225ab5",
        height: 50,
        borderColor: '#eaebed',
        borderWidth: 1
    },
    txt: {
        fontSize: 20,
        marginHorizontal: 30,
        color: "white"
    }
});

