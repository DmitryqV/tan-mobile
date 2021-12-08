import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const TrainingForm = () => {

  const [contractNumber, onChangeContractNumber] = useState('');
  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  return (
    <View>
      <Text>Номер договора*</Text>
      <TextInput style={styles.input} onChangeText={onChangeContractNumber} />
      <Text>ФИО (заказчик)*</Text>
      <TextInput style={styles.input} onChangeText={onChangeNameCustomer} />
      <Text>ФИО (обучающегося)*</Text>
      <TextInput style={styles.input} onChangeText={onChangeNameStudent} />
      <Text>Электронная почта *</Text>
      <TextInput style={styles.input} onChangeText={onChangeEmail} />
      <Text>Сумма оплаты *</Text>
      <TextInput style={styles.input} onChangeText={onChangePaymentAmount} />

      <TouchableOpacity>
        <View>
          <Text>Оплатить</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 0,
    borderColor: '#000000',
    borderWidth: 1,
  }
})