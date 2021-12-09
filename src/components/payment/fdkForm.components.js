import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { Select } from "../select.components";

export const FdkForm = () => {

  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [phone, onChangePhone] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  const [selectValue, setSelectValue] = useState(null);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  const services = [
    { title: 'Физкультурно-оздоровительные услуги', id: 1 },
    { title: 'Медицинские услуги', id: 2 },
    { title: 'Прочие услуги', id: 3 },
  ];

  return (
    <View style={styles.form}>
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
        <Text style={styles.inputTitle}>Номер телефона<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePhone}
          placeholder='+79210000000'
        />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Тип услуги<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[services]} getSelectValue={getSelectValue} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePaymentAmount}
          placeholder='4000'
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

