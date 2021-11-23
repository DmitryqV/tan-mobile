import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Subject = ({ props }) => {
  return (
    <View style={styles.subject}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subject: {
    backgroundColor: '#ffffff',
    minHeight: 50,
    padding: 10,
    borderTopWidth: 1.5,
    borderColor: '#f2f3f8',
    justifyContent: 'center'
  },
})