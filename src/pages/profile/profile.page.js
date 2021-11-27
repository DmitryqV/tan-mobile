import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import storage from '../../utils/storage.utils';
import { getProfile, getStudentInfo } from "../../api/api.get";
import { UserInfo, SutentInfo } from "../../components/components.export";

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
    <ScrollView>
      <View style={styles.profilePage}>
        {dataProfile !== undefined ?
          <>
            <UserInfo dataProfile={dataProfile} />
            <SutentInfo studentInfo={studentInfo} />
          </>
          :
          null
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  profilePage: {
    backgroundColor: '#f2f3f8',
    flex: 1,
    alignItems: 'center',
  },
})
