import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native';
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
          <View style={styles.block}>
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
            <Text
              style={styles.button}
              onPress={() => {
                setState((prev) => ({ ...prev, message: '' }));
                setState((prev) => ({ ...prev, message: updatePassword(state) }));
              }}>
              Обновить
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.title}>
              Привязать телефон
            </Text>
            <TextInput style={styles.itemInput} onChange={(e) => {
              setPhone(e);
            }}
              value={phone}
              placeholder='Введите номер телефона'
            />
            <Text style={styles.button} onPress={() => {
              updatePhone(state.api_token, phone, setSendCode);
            }}>
              Отправить код
            </Text>
          </View>
        </>
        :
        <View style={styles.block}>
          <TextInput style={styles.itemInput}
            onChange={(e) => {
              setCode(e.target.value);
            }}
            value={code}
            placeholder="Введите код из сообщения" />
          <Text style={styles.button} onPress={() => {
            confirmPhone(state.api_token, code, setSendCode);
          }}>
            Подтвердить
          </Text>
          <Text onPress={() => {
            setSendCode(false);
            setPhone('');
            setCode('');
          }}>
            Отмена
          </Text>
        </View>
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
  },
  block: {
    marginTop: 30,
  },
  itemInput: {
    width: 250,
    height: 32,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#869bff',
    marginTop: 5
  },
  button: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 20,
    maxWidth: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
});
