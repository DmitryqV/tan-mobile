import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { Select } from "../select.components";

export const UniversityResourcesForm = () => {

  const [login, onChangeLogin] = useState('');
  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  const [selectValueMonth, setSelectValueMonth] = useState(null);
  const [selectValuePeriod, setSelectValuePeriod] = useState(null);

  function getSelectValueMonth(value) {
    setSelectValueMonth(value);
  }

  function getSelectValuePeriod(value) {
    setSelectValuePeriod(value);
  }

  const months = [
    { title: 'Январь', id: 1 },
    { title: 'Февраль', id: 2 },
    { title: 'Март', id: 3 },
    { title: 'Апрель', id: 4 },
    { title: 'Май', id: 5 },
    { title: 'Июнь', id: 6 },
    { title: 'Июль', id: 7 },
    { title: 'Август', id: 8 },
    { title: 'Сентябрь', id: 9 },
    { title: 'Октябрь', id: 10 },
    { title: 'Ноябрь', id: 11 },
    { title: 'Декабрь', id: 12 },
  ];

  const periods = [
    { title: 'Первая половина месяца', id: 1 },
    { title: 'Вторая половина месяца', id: 2 },
    { title: 'Месяц полностью', id: 3 },
  ];

  return (
    <View style={styles.form}>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Логин<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLogin}
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>ФИО (заказчик)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNameCustomer}
          placeholder='Иванов Иван Иванович'
        />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>ФИО (обучающегося)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNameStudent}
          placeholder='Иванова Анастасия Ивановна'
        />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Электронная почта<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder='ivanov@pgups.ru'
        />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Месяц<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[months]} getSelectValue={getSelectValueMonth} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Период<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[periods]} getSelectValue={getSelectValuePeriod} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePaymentAmount}
          placeholder='250'
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    padding: 10,
    alignItems: 'center'
  },
  textInput: {
    width: '95%'
  },
  inputTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    padding: 0,
    paddingLeft: 5,
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
  },
  payButton: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 25,
    marginBottom: 10,
    maxWidth: 400
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
})
