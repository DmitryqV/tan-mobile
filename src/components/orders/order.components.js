import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const Order = ({ props }) => {

  const [moreInfo, onChangeMoreInfo] = useState(false)

  return (
    <>

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
