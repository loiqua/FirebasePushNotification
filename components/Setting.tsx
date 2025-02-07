import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Setting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
