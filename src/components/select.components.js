import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'

export const Select = ({ props }) => {

  const [openOptions, setOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <>
      <View style={{ width: 160 }}>
        <Pressable onPress={() => { openOptions ? setOpenOptions(false) : setOpenOptions(true) }}>
          <View style={styles.select}>
            <Text style={styles.value}>{selectedValue !== null ? selectedValue : 'Всё'}</Text>
            <Text style={[styles.arrow, { transform: [{ rotate: "90deg" }] }]}>&#5171;</Text>
          </View>
        </Pressable>
      </View>
      <View style={openOptions ? styles.optionsList : styles.hide}>
        <Pressable onPress={() => { setSelectedValue(null), setOpenOptions(false) }}>
          <Text style={styles.option}>Всё</Text>
        </Pressable>
        {

          props[0] !== undefined ?
            props[0].map((obj) => {
              return (
                <Pressable key={obj.id} onPress={() => { setSelectedValue(obj.title), setOpenOptions(false) }}>
                  <Text style={styles.option}>{obj.title}</Text>
                </Pressable>
              )
            })
            :
            null
        }
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