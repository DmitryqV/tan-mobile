import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform } from "react-native";
import { Select } from "../select.components";
import { paymentFormsStyles } from "../../styles/paymentForms.style";

export const Dormitory = () => {

  const [nameCustomer, onChangeNameCustomer] = useState('');
  const [nameStudent, onChangeNameStudent] = useState('');
  const [email, onChangeEmail] = useState('');
  const [dormitoryNumber, onChangeDormitoryNumber] = useState('');
  const [roomNumber, onChangeRoomNumber] = useState('');
  const [paymentAmount, onChangePaymentAmount] = useState('');
  const [selectValue, setSelectValue] = useState(null);
  const [isStudent, setIsStudent] = useState(0);

  function getSelectValue(value) {
    value === 'Проживание' ? setSelectValue(6) : setSelectValue(7)
  }

  const services = [
    { title: 'Проживание', id: 1 },
    { title: 'Дополнительные услуги', id: 2 },
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
        <Text style={paymentFormsStyles.inputTitle}>Номер общежития<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeDormitoryNumber}
          placeholder='1'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Номер комнаты как в квитанции<Text style={{ color: 'red' }}>*</Text></Text>
        <TextInput
          style={paymentFormsStyles.input}
          onChangeText={onChangeRoomNumber}
          placeholder='102/1'
        />
      </View>
      <View style={paymentFormsStyles.textInput}>
        <Text style={paymentFormsStyles.inputTitle}>Тип услуги<Text style={{ color: 'red' }}>*</Text></Text>
        <Select props={[services]} getSelectValue={getSelectValue} firstOption={'Выберите тип услуги'} />
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
      <TouchableOpacity onPress={() => { isStudent === 0 ? setIsStudent(1) : setIsStudent(0) }}>
        <View style={paymentFormsStyles.checkboxBlock}>
          <View style={paymentFormsStyles.checkbox}>
            {
              isStudent !== 0 ?
                <Text style={paymentFormsStyles.tick}>&#10003;</Text>
                :
                null
            }
          </View>
          <Text style={paymentFormsStyles.checkboxSpan}>Я являюсь студентом Университета ПГУПС</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={paymentFormsStyles.payButton}>
        <Text style={paymentFormsStyles.payButtonText}>Оплатить</Text>
      </TouchableOpacity>
    </View>
  )
}
