import React from "react";
import { View, Text, TextInput, Pressable } from 'react-native';

export const Login = () => {
  return (
    <View>
      <Text>Authorisation</Text>
      <TextInput id='inputLogin' />
      <TextInput id='inputPassword' />
      <Pressable>
        <Text>Войти</Text>
      </Pressable>
      <Pressable>
        <Text>Восстановить пароль</Text>
      </Pressable>
    </View>
  )
}