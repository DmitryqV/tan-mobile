import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NewsBlock } from "../../components/components.export";

export const Main = () => {
  return (
    <View style={styles.container}>
      <NewsBlock />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f8',
    alignItems: 'center',
  },
})
