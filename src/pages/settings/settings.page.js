import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import storage from '../../utils/storage.utils';
import { updatePassword, updatePhone, confirmPhone } from "../../api/api.post";

export const Settings = () => {
  const [updatePhoneHandler, uPhone] = useState('');
  const [updatePasswordHandler, uPassword] = useState('');
  const [confirmPhoneHandler, cPhone] = useState('');
  const [token, setToken] = useState(undefined);
  const [state, setState] = useState({
    password: {
      token,
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
      updatePasswordHandler
    },
  });

  storage.load({
    key: 'token',
    id: 228,
  })
    .then(api_token => {
      setToken(api_token);
    })
    .catch(err => {
      console.warn(err.message);
    });

  return (
    <View>
      <View>
        <Text>
          Обновить пароль
        </Text>
        <TextInput placeholder='Введите старый пароль' />
        <TextInput placeholder='Введите новый пароль' />
        <TextInput placeholder='Повторите новый пароль' />

        <Text onPress={() => {

        }}>
          Обновить
        </Text>
      </View>
      <View>
        <Text>
          Привязать телефон
        </Text>
        <Text>Введите номер телефона</Text>
        <TextInput placeholder='900 000 00 00' />
        <Text>
          Отправить код
        </Text>
        <TextInput placeholder="введите код из сообщения" />
        <Text>Подтвердить номер телефона</Text>
      </View>
    </View>
  );
};
