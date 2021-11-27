import { hide } from "expo-splash-screen";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const Subject = ({ props }) => {

  const [moreInfo, onChangeMoreInfo] = useState(false)

  return (
    <>
      <Pressable onPress={() => moreInfo === false ? onChangeMoreInfo(true) : onChangeMoreInfo(false)}>
        <View style={styles.subject}>
          <Text style={styles.arrow}>&#5125;</Text>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={moreInfo === false ? styles.hideMoreInfo : null}>
          <Text id={props.id} style={styles.aboba}>ABOBA</Text>
        </View>
      </Pressable>
    </>
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
  },
  moreInfo: {
    color: 'red'
  },
  hideMoreInfo: {
    display: 'none'
  },
})