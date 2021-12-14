import React, { useState } from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { Select } from '../../components/select.components';
import { TrainingForm, UniversityResourcesForm, DfkForm, Dormitory } from "../../components/components.export";
import { payTraning } from "../../api/api.get";

export const Payment = ({ navigation }) => {

  const forms = [
    { title: 'Обучение', id: 1 },
    { title: 'Ресурсы университета', id: 2 },
    { title: 'ДФК', id: 3 },
    { title: 'Общежитие', id: 4 },
  ];

  const [ansver, setAnsver] = useState(null);
  const [selectValue, setSelectValue] = useState(forms[0].title);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  React.useEffect(
    () => navigation.addListener('focus', () => setSelectValue(forms[0].title), setAnsver(null)),
    []
  );

  function openUrl() {
    Linking.openURL(ansver.data)
  }

  return (
    <View style={styles.container}>
      {ansver === null ?
        <>
          <Text style={styles.title}>Выберите форму для оплаты</Text>
          <Select props={[forms]} getSelectValue={getSelectValue} firstOption={null} />
          {selectValue === 'Обучение' ? <TrainingForm payTraning={payTraning} setAnsver={setAnsver} /> :
            selectValue === 'Ресурсы университета' ? <UniversityResourcesForm /> :
              selectValue === 'ДФК' ? <DfkForm /> :
                selectValue === 'Общежитие' ? <Dormitory />
                  :
                  null
          }
        </>
        :
        <>
          {
            openUrl()
          }
          <Text>Вас перенесёт в браузер</Text>
        </>

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
