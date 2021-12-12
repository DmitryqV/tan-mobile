import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Select } from '../../components/select.components';
import { TrainingForm, UniversityResourcesForm, DfkForm, Dormitory } from "../../components/components.export";

export const Payment = () => {

  const forms = [
    { title: 'Обучение', id: 1 },
    { title: 'Ресурсы университета', id: 2 },
    { title: 'ДФК', id: 3 },
    { title: 'Общежитие', id: 4 },
  ];

  const [selectValue, setSelectValue] = useState(forms[0].title);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите форму для оплаты</Text>
      <Select props={[forms]} getSelectValue={getSelectValue} firstOption={null} />
      {selectValue === 'Обучение' ? <TrainingForm /> :
        selectValue === 'Ресурсы университета' ? <UniversityResourcesForm /> :
          selectValue === 'ДФК' ? <DfkForm /> :
            selectValue === 'Общежитие' ? <Dormitory />
              :
              null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  }
})