import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export const UserInfo = ({ dataProfile }) => {
  return (
    <View style={styles.container}>
      <Text>{dataProfile.sex}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})