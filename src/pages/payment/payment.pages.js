import React, { useState } from "react";
import { View, TouchableOpacity, Text, Linking, StyleSheet } from "react-native";
import { Select } from '../../components/select.components';
import { TrainingForm, UniversityResourcesForm, Dormitory } from "../../components/components.export";
import { payTraning } from "../../api/api.get";
import { paymentFormsStyles } from "../../styles/paymentForms.style";

export const Payment = ({ navigation }) => {

  const forms = [
    { title: 'Обучение', id: 1 },
    { title: 'Ресурсы университета', id: 2 },
    { title: 'Общежитие', id: 3 },
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
    <View style={ansver === null ? styles.container : styles.goBackContainer}>
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
          <Text style={styles.goBackTitle}>
            Вы будете перенаправлены в браузер для оплаты. Если вы уже оплатили, то можете вернуться обратно.
          </Text>
          <TouchableOpacity
            style={paymentFormsStyles.payGoBackButton}
            onPress={() => {
              setAnsver(null)
            }}
          >
            <Text style={paymentFormsStyles.payGoBackButtonText}>Вернуться обратно</Text>
          </TouchableOpacity>
        </>

      }

    </View >
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
  },
  goBackContainer: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackTitle: {
    fontSize: 16,
  }
})
