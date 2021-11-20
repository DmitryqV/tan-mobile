import React from "react";
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export const UserInfo = ({ dataProfile }) => {
  return (
    <View>
      <Text>{dataProfile.email}</Text>
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