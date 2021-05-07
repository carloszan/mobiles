import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#fc5101',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default () => (
  <View style={styles.container}>
    <Text>Left</Text>
    <Text>TopBar</Text>
    <Text>Right</Text>
  </View>
);
