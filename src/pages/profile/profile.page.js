import React from "react";
import { View, Text } from 'react-native';
import storage from '../../utils/storage.utils';
import { getProfile } from "../../api/api.get";

export const Profile = () => {

  storage.load({
    key: 'token',
    id: 228,
  })
    .then(ret => {
      // found data goes to then()
      getProfile(ret)
    })
    .catch(err => {
      // any exception including data not found
      // goes to catch()
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // TODO;
          break;
        case 'ExpiredError':
          // TODO
          break;
      }
    });

  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}