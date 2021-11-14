import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Вход</Text>
      <TextInput id='inputLogin' style={styles.inputLogin} placeholder='Введите логин' />
      <TextInput id='inputPassword' style={styles.inputLogin} placeholder='Введите пароль' />
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Войти</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.buttonRecoveryPassword}>Восстановить пароль</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,

  },
  inputLogin: {
    width: '65%',
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    paddingLeft: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonRecoveryPassword: {
    color: '#d4d4d4',
  }
})