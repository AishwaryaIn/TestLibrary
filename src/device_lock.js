import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert } from 'react-native';
import Locks from 'avegen-authenticator';

export default class DeviceLock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    Locks.getDeviceAuth(function success(response) {
      Alert.alert('Authentication succeeded', JSON.stringify(response))
    }, function error(error) {
      Alert.alert('Authentication Failed', JSON.stringify(error))
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, alignSelf: "center", marginVertical: 10, color: '#225ab5' }}>{"Test Device Lock"}</Text>
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

