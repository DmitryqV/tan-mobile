import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { loginPOST } from "../../api/api.post";
import Logo from '../../images/logo.png'

export const Login = ({ onChangeIsLoggedIn }) => {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loginChecker, onChangeLoginChecker] = useState();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      <Text style={styles.loginTitle}>Вход в систему</Text>
      <TextInput
        id='inputEmail'
        style={styles.inputLogin}
        onChangeText={onChangeEmail}
        placeholder='Введите логин'
      />
      <TextInput
        id='inputPassword'
        style={styles.inputLogin}
        onChangeText={onChangePassword}
        placeholder='Введите пароль'
        secureTextEntry={true}
      />

      {
        loginChecker === 'invalidData' ?
          <Text style={styles.errorTxt}>неверный логин или пароль</Text>
          :
          loginChecker === 'notStudent' ?
            <Text style={styles.errorTxt}>Вы не являетесь студентом</Text>
            :
            null
      }

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          loginPOST(email, password, onChangeLoginChecker, onChangeIsLoggedIn)
        }}
      >
        <Text style={styles.loginButtonText}>Войти</Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 40
  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 15,
    color: '#242939'
  },
  inputLogin: {
    width: '65%',
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 15,
    maxWidth: 400
  },
  loginButton: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 10,
    marginBottom: 120,
    maxWidth: 400
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  errorTxt: {
    color: 'red'
  },
})
