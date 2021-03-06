import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native'

export const Select = ({ props, getSelectValue, width, firstOption }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <>
      <View style={{ maxWidth: width }}>
        <Pressable onPress={() => { openOptions ? setOpenOptions(false) : setOpenOptions(true) }}>
          <View style={{ maxWidth: width }, styles.select}>
            <Text style={styles.value}>
              {selectedValue !== null ?
                selectedValue
                :
                firstOption === null ?
                  setSelectedValue(props[0][0].title)
                  :
                  firstOption
              }
            </Text>
            <Text style={[styles.arrow, { transform: [{ rotate: "90deg" }] }]}>&#5171;</Text>
          </View>
        </Pressable>
      </View>
      <View style={openOptions ? [styles.optionsList, { maxWidth: width }] : styles.hide}>
        {firstOption !== null ?
          <Pressable onPress={() => { setSelectedValue(null), setOpenOptions(false), getSelectValue(null) }}>
            <Text style={styles.option}>{firstOption}</Text>
          </Pressable>
          :
          null
        }

        {

          props[0] !== undefined ?
            props[0].map((obj) => {
              return (
                <Pressable key={obj.id} onPress={() => { setSelectedValue(obj.title), setOpenOptions(false), getSelectValue(obj.title) }}>
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
