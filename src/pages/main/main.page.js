import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>Добавте сюда виджеты жля максимально быстрого доступа к важным разделам приложения</Text>
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
  note: {
    fontSize: 18,
    textAlign: 'center',
  }
})
