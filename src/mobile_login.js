import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { MobileLogin } from 'avegen-authenticator';

export default class MobileAuthentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactPhonePrefix: "",
      countryCode: "",
      contactNumber: "",
      patientNumber: "",

    };
  }
  onPress() {
    console.log("Call send otp api")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, alignSelf: "center", marginVertical: 10, color: '#225ab5'}}>{"Login"}</Text>
        <MobileLogin
          countrySelectorEditable={false}
          initialCountry={"in"}
          placeholderPhoneInput={'Enter Phone number'}
          placeholderPatientNumber={'Enter Patient id'}
          loginButtonName={"Login"}
          config={"mobile_number_and_patient_number"}
          onSelectCountry={(contactPhonePrefix, countryCode) => {
            this.setState({
              contactPhonePrefix: contactPhonePrefix,
              countryCode: countryCode,
            })
          }}
          onPatientNumberTextChange={(text) => {
            this.setState({
              contactNumber: text,
            })
          }}
          onPhoneTextChange={(text) => {
            this.setState({
              patientNumber: text,
            })
          }}
          onLoginPress={() => {
            this.onPress()
          }}
          loginButtonTextStyle={{color:"white"}}
          loginButtonStyle={{backgroundColor:"#225ab5"}}
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

