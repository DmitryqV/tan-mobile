import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export const Select = ({ props }) => {
  return (
    <View style={styles.select}>
      <Text style={styles.value}>Всё</Text>
      <Text style={[styles.arrow, { transform: [{ rotate: "90deg" }] }]}>&#5171;</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  select: {
    height: 35,
    width: 160,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e5ec',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  value: {
    color: '#495057',
  },
  arrow: {
    color: '#495057',
    fontSize: 12,
  }
})