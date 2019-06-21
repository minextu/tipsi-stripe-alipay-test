/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import stripe from 'tipsi-stripe'
stripe.setOptions({
  publishableKey: 'pk_test_ERB3sHc47F61oaBuXGlS831a',
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const test = async () => {
  const params = {
    type: 'alipay',
    amount: 500,
    currency: 'CAD',
    returnURL: 'stripeExample://stripe-redirect',
  }
  try {
    const source = await stripe.createSourceWithParams(params)
    Alert.alert('success')  
  } catch(e) {
    Alert.alert('Failure', e.message)
  }

}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={test}><Text>Test</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
