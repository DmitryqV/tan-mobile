import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Select } from "../select.components";

export const FilterSubject = ({ dataSession, dataEducationYear, setFilters }) => {

  const [radioButton, setRadioButton] = useState(null);
  const [SelectValue, setSelectValue] = useState()

  function getSelectValue(value) {
    setSelectValue(value);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Фильтры</Text>
      </View>
      <View>
        <View>
          <Text>Учебный год: </Text>
          {/* В props будем передавать свои данные, а кастом свойства в доп.свойства элемента*/}
          <Select props={[dataEducationYear]} getSelectValue={getSelectValue} />
        </View>
        <View>
          <Text>Семестр: </Text>
          {dataSession !== undefined ?
            <View style={styles.sessionFilter}>
              <Pressable onPress={() => { radioButton !== dataSession['21'] ? setRadioButton(dataSession['21']) : setRadioButton(null) }}>
                <View style={styles.radioButtons}>
                  <View style={radioButton === dataSession['21'] ? styles.radioButtonActive : styles.radioButton}></View>
                  <Text>{dataSession['21']}</Text>
                </View>
              </Pressable>
              <Pressable onPress={() => { radioButton !== dataSession['22'] ? setRadioButton(dataSession['22']) : setRadioButton(null) }}>
                <View style={styles.radioButtons}>
                  <View style={radioButton === dataSession['22'] ? styles.radioButtonActive : styles.radioButton}></View>
                  <Text>{dataSession['22']}</Text>
                </View>
              </Pressable>
            </View>
            :
            null
          }
        </View>
        <Pressable onPress={() => { setFilters([SelectValue, radioButton]) }}>
          <View style={styles.applyFilterButton}>
            <Text>Применить фильтры</Text>
          </View>
        </Pressable>
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
  },
  sessionFilter: {
    flexDirection: 'row'
  },
  radioButtons: {
    flexDirection: 'row'
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#5d78ff',
    borderRadius: 50
  },
  radioButtonActive: {
    height: 20,
    width: 20,
    backgroundColor: '#5d78ff',
    borderRadius: 50
  },
  applyFilterButton: {
    height: 30,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#5d78ff',
    borderRadius: 4
  }
})
