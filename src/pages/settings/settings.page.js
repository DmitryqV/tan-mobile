import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import storage from '../../utils/storage.utils';
import { updatePassword, updatePhone, confirmPhone } from "../../api/api.post";

export const Settings = () => {
  const [state, setState] = useState({
    api_token: '',
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
    message: '',
  });
  const [sendCode, setSendCode] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  if (state.api_token === '') {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(api_token => {
        setState(prev => ({ ...prev, api_token: api_token }));
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <View style={styles.container}>
      {!sendCode
        ?
        <>
          <Text style={styles.title}>
            Обновить пароль
          </Text>

          <TextInput style={styles.itemInput} placeholder='Введите старый пароль' onChange={(e) => {
            setState((prev) => {
              return { ...prev, current_password: e.target.value };
            });
          }}
            value={state.current_password}
          />

          <TextInput style={styles.itemInput} placeholder='Введите новый пароль' onChange={(e) => {
            setState((prev) => {
              return { ...prev, new_password: e.target.value };
            });
          }}
            value={state.new_password}
          />

          <TextInput style={styles.itemInput} placeholder='Повторите новый пароль' onChange={(e) => {
            setState((prev) => {
              return { ...prev, new_password_confirmation: e.target.value };
            });
          }}
            value={state.new_password_confirmation}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setState((prev) => ({ ...prev, message: '' }));
              setState((prev) => ({ ...prev, message: updatePassword(state) }));
            }}
          >
            <Text style={styles.buttonText}>Обновить</Text>
          </TouchableOpacity>

          <Text style={styles.title}>
            Привязать телефон
          </Text>
          <TextInput style={styles.itemInput} onChange={(e) => {
            setPhone(e.target.value);
          }}
            value={phone}
            placeholder='Введите номер телефона'
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              updatePhone(state.api_token, phone, setSendCode);
            }}
          >
            <Text style={styles.buttonText}>Отправить код</Text>
          </TouchableOpacity>

        </>
        :
        <>
          <TextInput style={styles.itemInput}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
            placeholder="Введите код из сообщения" />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              confirmPhone(state.api_token, code, setSendCode);
            }}
          >
            <Text style={styles.buttonText}>Подтвердить</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setSendCode(false);
              setPhone('');
              setCode('');
            }}
          >
            <Text style={styles.buttonText}>Отмена</Text>
          </TouchableOpacity>

        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    minWidth: 300,
    width: '100%',
    height: 'auto',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#525252',
    marginTop: 30,
    marginBottom: 10,
  },
  itemInput: {
    width: '65%',
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 15,
    maxWidth: 400
  },
  button: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 10,
    maxWidth: 400
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
