import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export const TrainingForm = () => {
  return (
    <View>
      <Text>Номер договора*</Text>
      <TextInput style={styles.input} />
      <Text>ФИО (заказчик)*</Text>
      <TextInput style={styles.input} />
      <Text>ФИО (обучающегося)*</Text>
      <TextInput style={styles.input} />
      <Text>Электронная почта *</Text>
      <TextInput style={styles.input} />
      <Text>Сумма оплаты *</Text>
      <TextInput style={styles.input} />

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