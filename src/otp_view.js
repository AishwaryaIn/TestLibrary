import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { OTPView } from 'avegen-authenticator';

export default class OTPScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     otp_code: ""
    };
  }
  onPress() {
    console.log("Call verify otp api")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, alignSelf: "center", marginVertical: 20, color: '#225ab5' }}>{"Enter the 6-digit code we sent you"}</Text>
        <OTPView
          maxLength={6}
          verifyButtonName={'Verify OTP'}
          disableSubmitButton={false}
          onOTPTextChange={(text) => {
            this.setState({
              otp_code: text
            })
          }}
          onVerifyOTPPress={() => {
            this.onPress() 
          }}
          verifyButtonTextStyle={{color:"white"}}
          verifyButtonStyle={{backgroundColor:"#225ab5"}}
        />

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
  }
});

