import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from "../select.components";

export const FilterSubject = ({ dataSession, dataEducationYear }) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Фильтры</Text>
      </View>
      <View>
        <View>
          <Text>Учебный год: </Text>
          {/* В props будем передавать свои данные, а кастом свойства в доп.свойства элемента*/}
          <Select props={[dataEducationYear]} />
        </View>
        {/* <View>
          <Text>Семестр: </Text>
          <Select props={[dataSession]} />
        </View> */}
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
  }
})
