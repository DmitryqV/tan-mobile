import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const Order = ({ props }) => {

  const [moreInfo, onChangeMoreInfo] = useState(false)

  return (
    <>
      <Pressable onPress={() => moreInfo === false ? onChangeMoreInfo(true) : onChangeMoreInfo(false)}>
        <View style={styles.subject}>
          <Text
            style={[styles.arrow, moreInfo === false ? null : { transform: [{ rotate: "90deg" }] }]}
          >
            &#5125;
          </Text>
          <View style={styles.mainInfo}>
            <Text style={styles.title}>{props.number}</Text>
            <Text style={styles.date}>{props.date}</Text>
          </View>
        </View>
      </Pressable>
      <View style={moreInfo === false ? styles.hideMoreInfo : styles.moreInfo}>
        <Text style={styles.spanMoreInfo}>
          Содержание
          <Text style={styles.dataMoreInfo}>&#8199;{props.title}</Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Статус
          <Text style={
            [styles.dataMoreInfo,
            props.state === 'Проведено' ?
              styles.greenText
              :
              styles.redText
            ]}>
            &#8199;{props.state}
          </Text>
        </Text>
      </View>
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
  mainInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#595d6e',
    marginLeft: 5
  },
  date: {
    marginRight: 25,
    color: '#595d6e'
  },
  moreInfo: {
    backgroundColor: '#ffffff',
    paddingRight: 25,
  },
  hideMoreInfo: {
    display: 'none'
  },
  spanMoreInfo: {
    color: '#595d6e',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 35,
    marginBottom: 10,
  },
  dataMoreInfo: {
    fontWeight: 'normal'
  },
  greenText: {
    color: '#1dc9b7'
  },
  redText: {
    color: '#fd397a'
  }
})
