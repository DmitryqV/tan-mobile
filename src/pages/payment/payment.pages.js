import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from '../../components/select.components';
import { TrainingForm, UniversityResourcesForm, DfkForm, Dormitory } from "../../components/components.export";

export const Payment = () => {

  const [selectValue, setSelectValue] = useState(null);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  const forms = [
    { title: 'Обучение', id: 1 },
    { title: 'Ресурсы университета', id: 2 },
    { title: 'ДФК', id: 3 },
    { title: 'Общежитие', id: 4 },
  ];

  return (
    <View style={styles.container}>
      <Text>Для оплаты введите ваши данные.</Text>
      <Select props={[forms]} getSelectValue={getSelectValue} />
      <Dormitory />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
})