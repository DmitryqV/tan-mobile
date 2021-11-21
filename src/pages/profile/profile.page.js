import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from 'react-native';
import storage from '../../utils/storage.utils';
import { getProfile, getStudentInfo } from "../../api/api.get";
import { UserInfo } from "../../components/userInfo.components";
import { SutentInfo } from "../../components/studentInfo.components";
import { onChange } from "react-native-reanimated";

export const Profile = () => {

  const [dataProfile, onChangeDataProfile] = useState();
  const [studentInfo, onChangeStudentInfo] = useState();

  if (dataProfile === undefined && studentInfo === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getProfile(ret, onChangeDataProfile);
        getStudentInfo(ret, onChangeStudentInfo)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <View style={styles.profilePage}>
      <Text>Мой профиль</Text>
      {dataProfile !== undefined ?
        <>
          <UserInfo dataProfile={dataProfile} />
          <SutentInfo studentInfo={studentInfo} />
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
