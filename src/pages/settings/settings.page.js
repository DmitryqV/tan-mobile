import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import storage from '../../utils/storage.utils';
import { updatePassword, updatePhone, confirmPhone } from "../../api/api.post";

export const Settings = () => {
  const [updatePhoneHandler, uPhone] = useState();
  const [updatePasswordHandler, uPassword] = useState();
  const [confirmPhoneHandler, cPhone] = useState();
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
