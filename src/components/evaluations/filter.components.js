import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Select } from "../select.components";

export const FilterSubject = ({ dataSession, dataEducationYear, setFilters }) => {

  const [radioButton, setRadioButton] = useState(null);
  const [SelectValue, setSelectValue] = useState(null);
  const [hideFilters, setHideFilters] = useState(false);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => { hideFilters === false ? setHideFilters(true) : setHideFilters(false) }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Фильтры</Text>
        </View>
      </TouchableOpacity>

      {hideFilters !== false ?
        <View style={styles.allFilters}>
          <View>
            <Text style={styles.titleFilter}>Учебный год: </Text>
            {/* В props будем передавать свои данные, а кастом свойства в доп.свойства элемента*/}
            <Select style={styles.select} props={[dataEducationYear]} getSelectValue={getSelectValue} width={160} firstOption={'Всё'} />
          </View>
          <View>
            <Text style={styles.titleFilter}>Семестр: </Text>
            {dataSession !== undefined ?
              <View style={styles.sessionFilter}>
                <TouchableOpacity onPress={() => { radioButton !== dataSession['21'] ? setRadioButton(dataSession['21']) : setRadioButton(null) }}>
                  <View style={styles.radioButtons}>
                    <View style={radioButton === dataSession['21'] ? styles.radioButtonActive : styles.radioButton}></View>
                    <Text style={styles.radiotitle}>{dataSession['21']}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { radioButton !== dataSession['22'] ? setRadioButton(dataSession['22']) : setRadioButton(null) }}>
                  <View style={styles.radioButtons}>
                    <View style={radioButton === dataSession['22'] ? styles.radioButtonActive : styles.radioButton}></View>
                    <Text style={styles.radiotitle}>{dataSession['22']}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              :
              null
            }
          </View>
          <TouchableOpacity onPress={() => { setFilters([SelectValue, radioButton]) }}>
            <View style={styles.applyFilterButton}>
              <Text style={styles.applyFilterText}>Применить фильтры</Text>
            </View>
          </TouchableOpacity>
        </View>
        :
        null
      }
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
  allFilters: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0,
  },
  titleFilter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#646c9a',
    marginBottom: 10,
    marginTop: 10
  },
  sessionFilter: {
    flexDirection: 'row',
    marginBottom: 25,
    justifyContent: 'flex-start'
  },
  radioButtons: {
    flexDirection: 'row',
  },
  radiotitle: {
    color: '#495057',
    marginLeft: 5,
    marginRight: 20,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#5d78ff',
    borderRadius: 50,
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
  },
  applyFilterText: {
    fontWeight: 'bold',
    color: '#5d78ff'
  }
})
