import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export const Settings = () => {
  const [updatePhoneHandler, updatePhone] = useState();
  const [updatePasswordHandler, updatePassword] = useState();
  const [confirmPhoneHandler, confirmPhone] = useState();
  const [token, setToken] = useState(undefined);

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
    </View>
  );
};
