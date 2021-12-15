import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Select } from "../select.components";
import { paymentFormsStyles } from "../../styles/paymentForms.style";

export const UniversityResourcesForm = ({ payUniversityRes, setAnsver }) => {

  const [login, onChangeLogin] = useState('');
  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState(0);
  const [selectValueMonth, setSelectValueMonth] = useState(null);
  const [selectValuePeriod, setSelectValuePeriod] = useState(null);
  const [textPeriod, setTextPeriod] = useState();
  const [serviceName, setServiceName] = useState(null);

  function getSelectValueMonth(value) {
    setSelectValueMonth(value);
  }

  function getSelectValuePeriod(value) {
    if (value === 'Месяц полностью') {
      onChangePaymentAmount(450);
      setSelectValuePeriod(450);
      setTextPeriod('месяц полностью');
    } else if (value === null) {
      onChangePaymentAmount(0);
      setSelectValuePeriod(0);
    } else if (value === 'Первая половина месяца') {
      onChangePaymentAmount(250);
      setSelectValuePeriod(250);
      setTextPeriod('первую половину месяца');
    } else if (value === 'Вторая половина месяца') {
      onChangePaymentAmount(250);
      setSelectValuePeriod(250);
      setTextPeriod('вторую половину месяца');
    }
  }

  // function createServiceName() {
  //   setServiceName('Оплата ресурсов университета за ' + selectValueMonth.toLowerCase() + ' на ' + textPeriod + ' с/с 383')
  // }

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
    <View style={paymentFormsStyles.form}>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Логин<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeLogin}
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>ФИО (заказчик)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeNameCustomer}
          placeholder='Иванов Иван Иванович'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>ФИО (обучающегося)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeNameStudent}
          placeholder='Иванова Анастасия Ивановна'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Электронная почта<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeEmail}
          placeholder='ivanov@pgups.ru'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Месяц<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[months]} getSelectValue={getSelectValueMonth} firstOption={'Выберите месяц'} />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Период<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[periods]} getSelectValue={getSelectValuePeriod} firstOption={'Выберите период'} />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          placeholder={paymentAmount}
          editable={false}
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <TouchableOpacity
        style={paymentFormsStyles.payButton}
        onPress={() => {
          // createServiceName();
          // serviceName !== null ?
          payUniversityRes('Оплата ресурсов университета за ' + selectValueMonth.toLowerCase() + ' на ' + textPeriod + ' с/с 383', login, nameCustomer, nameStudent, email, selectValuePeriod, paymentAmount, setAnsver)
          // :
          // null
        }}
      >
        <Text style={paymentFormsStyles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}
