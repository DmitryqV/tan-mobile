import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'

export const Select = ({ props }) => {

  const [openOptions, setOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null)

  return (
    <>
      <Pressable onPress={() => { openOptions ? setOpenOptions(false) : setOpenOptions(true) }}>
        <View style={styles.select}>
          <Text style={styles.value}>Всё</Text>
          <Text style={[styles.arrow, { transform: [{ rotate: "90deg" }] }]}>&#5171;</Text>
        </View>
      </Pressable>
      <View style={openOptions ? styles.optionsList : styles.hide}>
        {

        }
        <Pressable>
          <Text style={styles.option}>2016/2017</Text>
        </Pressable>
      </View>
    </>
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
  },
  optionsList: {
    width: 160,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e5ec',
  },
  option: {
    color: '#495057',
    height: 35,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 7,
    paddingBottom: 7,
  },
  hide: {
    display: 'none'
  }
})