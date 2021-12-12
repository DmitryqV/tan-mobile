import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { paymentFormsStyles } from "../../styles/paymentForms.style";

export const TrainingForm = ({ payTraning }) => {

  const [contractNumber, onChangeContractNumber] = useState('');
  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  return (
    <View style={paymentFormsStyles.form}>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Номер договора<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeContractNumber}
          placeholder='0000-00'
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
        <Text style={paymentFormsStyles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangePaymentAmount}
          placeholder='46000'
          keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'}
        />
      </View>
      <TouchableOpacity
        style={paymentFormsStyles.payButton}
        onPress={() => {
          payTraning(contractNumber, nameCustomer, nameStudent, email, paymentAmount)
        }}
      >
        <Text style={paymentFormsStyles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}
