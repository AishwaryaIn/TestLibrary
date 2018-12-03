import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { EmailLogin } from 'avegen-authenticator';

export default class EmailAuthentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: "",
      password: "",
    };
  }
  
  onPress() {
    console.log("Call verify email and password api")
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, alignSelf: "center", marginVertical: 10, color: '#225ab5' }}>{"Login"}</Text>
        <EmailLogin
          placeholderEmailInput={'Enter Email address'}
          placeholderPasswordInput={'Enter Password'}
          togglePasswordVisibility={true}
          loginButtonName={'Login'}
          loginButtonTextStyle={{ color: "white" }}
          loginButtonStyle={{ backgroundColor: "#225ab5" }}
          onVerifyEmailPress={()=>{
            this.onPress()
          }}
          onEmailTextChange={(text)=>{
            this.setState({
              email_id: text
            })
          }}
          onPasswordTextChange={(text)=>{
            this.setState({
              password: text
            })
          }}
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

