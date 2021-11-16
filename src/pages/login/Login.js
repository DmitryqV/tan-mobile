import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { loginPOST } from "../../api/api.post";

export const Login = () => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [loginChecker, onChangeLoginChecker] = React.useState(true);


  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Вход</Text>
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
        console.log(loginChecker),
        loginChecker === false ?
          <Text style={styles.errorTxt}>неверный логин или пароль</Text>
          :
          null
      }

      <Pressable
        style={styles.loginButton}
        onPress={() => { loginPOST(email, password, onChangeLoginChecker) }}
      >
        <Text style={styles.loginButtonText}>Войти</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.buttonRecoveryPassword}>Восстановить пароль</Text>
      </Pressable>
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
    marginBottom: 10,
    maxWidth: 400
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonRecoveryPassword: {
    color: '#d4d4d4',
  },
  errorTxt: {
    color: 'red'
  }
})