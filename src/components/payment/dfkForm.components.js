import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Select } from "../select.components";
import { paymentFormsStyles } from "../../styles/paymentForms.style";

export const DfkForm = () => {

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
    <View style={paymentFormsStyles.form}>
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
        <Text style={paymentFormsStyles.inputTitle}>Номер телефона<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangePhone}
          placeholder='+79210000000'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Тип услуги<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[services]} getSelectValue={getSelectValue} />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangePaymentAmount}
          placeholder='4000'
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <TouchableOpacity style={paymentFormsStyles.payButton}>
        <Text style={paymentFormsStyles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}
