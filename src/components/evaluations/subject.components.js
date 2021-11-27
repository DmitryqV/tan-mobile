import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Subject = ({ props }) => {
  return (
    <View style={styles.subject}>
      <Text style={styles.arrow}>&#5125;</Text>
      <Text style={styles.title}>{props.title}</Text>
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
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  arrow: {
    color: '#5d78ff',
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10
  },
  title: {
    color: '#595d6e'
  }
})