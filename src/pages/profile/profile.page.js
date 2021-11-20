import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native';
import storage from '../../utils/storage.utils';
import { getProfile } from "../../api/api.get";
import { UserInfo } from "../../components/userInfo.components";

export const Profile = () => {

  const [dataProfile, onChangeDataProfile] = useState();

  if (dataProfile === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        // found data goes to then()
        getProfile(ret, onChangeDataProfile)
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
  }
  return (
    <View style={styles.profilePage}>
      <Text>Мой профиль</Text>
      {dataProfile !== undefined ?
        <>
          <UserInfo dataProfile={dataProfile} />
        </>
        :
        null
      }

    </View>
  )
}

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: '#f2f3f8',
    flex: 1,
    alignItems: 'center',
  },
})
