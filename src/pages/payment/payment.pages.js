import React, { useState } from "react";
import { View, Text } from "react-native";
import { Select } from '../../components/select.components';

export const Payment = () => {

  const [selectValue, setSelectValue] = useState(null);

  function getSelectValue(value) {
    setSelectValue(value);
  }

  const forms = [
    { title: 'Обучение', id: 1 },
    { title: 'Ресурсы университета', id: 2 },
    { title: 'ДФК', id: 3 },
    { title: 'Общежитие', id: 4 },
  ];

  return (
    <View>
      <Text>Для оплаты введите ваши данные.</Text>
      <Select props={[forms]} getSelectValue={getSelectValue} />
    </View>
  )
}
