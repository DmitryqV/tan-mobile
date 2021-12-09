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
        <Text>Номер договора*</Text>
        <TextInput style={styles.input} onChangeText={onChangeContractNumber} />
      </View>
      <View style={styles.textInput}>
        <Text>ФИО (заказчик)*</Text>
        <TextInput style={styles.input} onChangeText={onChangeNameCustomer} />
      </View>
      <View style={styles.textInput}>
        <Text>ФИО (обучающегося)*</Text>
        <TextInput style={styles.input} onChangeText={onChangeNameStudent} />
      </View>
      <View style={styles.textInput}>

        <Text>Электронная почта *</Text>
        <TextInput style={styles.input} onChangeText={onChangeEmail} />
      </View>
      <View style={styles.textInput}>
        <Text>Сумма оплаты *</Text>
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
  input: {
    padding: 0,
    borderColor: '#000000',
    borderWidth: 1,
    height: 35,
    marginTop: 5,
    marginBottom: 10
  }
})