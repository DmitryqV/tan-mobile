import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const Subject = ({ props }) => {

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
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
      <View style={moreInfo === false ? styles.hideMoreInfo : styles.moreInfo}>
        <Text style={styles.spanMoreInfo}>
          Учебный год
          <Text style={styles.dataMoreInfo}>&#8199;{props.year_title}</Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Семестр
          <Text style={styles.dataMoreInfo}>&#8199;{props.semester}</Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Форма контроля
          <Text style={styles.dataMoreInfo}>&#8199;{props.controlaction_title}</Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Оценка в сессию
          <Text style={
            [styles.dataMoreInfo,
            props.value_shorttitle_session !== 'неуваж.' ?
              props.value_shorttitle_session !== 'незач.' ?
                styles.greenText
                :
                styles.redText
              :
              styles.redText
            ]}>
            &#8199;{props.value_session_title}
          </Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Итоговая оценка
          <Text style={
            [styles.dataMoreInfo,
            props.value_shorttitle !== 'неуваж.' ?
              props.value_shorttitle !== 'незач.' ?
                styles.greenText
                :
                styles.redText
              :
              styles.redText
            ]}>
            &#8199;{props.value_title}</Text>
        </Text>
        <Text style={styles.spanMoreInfo}>
          Дата сдачи
          <Text style={styles.dataMoreInfo}>  {props.mark_perform_date}</Text>
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
    backgroundColor: '#ffffff',
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
