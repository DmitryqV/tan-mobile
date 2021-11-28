import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from "../select.components";

export const FilterSubject = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Фильтры</Text>
      </View>
      <View>
        <View>
          <Text>Учебный год: </Text>
          <Select />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#5d78ff'
  }
})
