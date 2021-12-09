import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const TrainingForm = () => {

  const [contractNumber, onChangeContractNumber] = useState('');
  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  return (
    <View style={styles.form}>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Номер договора<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput style={styles.input} onChangeText={onChangeContractNumber} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>ФИО (заказчик)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput style={styles.input} onChangeText={onChangeNameCustomer} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>ФИО (обучающегося)<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput style={styles.input} onChangeText={onChangeNameStudent} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Электронная почта<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput style={styles.input} onChangeText={onChangeEmail} />
      </View>
      <View style={styles.textInput}>
        <Text style={styles.inputTitle}>Сумма оплаты<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput style={styles.input} onChangeText={onChangePaymentAmount} />
      </View>
      <TouchableOpacity>
        <View>
          <Text>Оплатить</Text>
        </View>
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
    fontWeight: 'bold'
  },
  input: {
    padding: 0,
    paddingLeft: 5,
    height: 35,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
  }
})