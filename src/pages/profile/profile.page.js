import React, { useState, useCallback } from "react";
import { RefreshControl, View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import storage from '../../utils/storage.utils';
import { getProfile, getStudentInfo } from "../../api/api.get";
import { UserInfo, SutentInfo } from "../../components/components.export";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const Profile = ({ onChangeIsLoggedIn }) => {

  const [refreshing, setRefreshing] = useState(false);
  const [dataProfile, onChangeDataProfile] = useState();
  const [studentInfo, onChangeStudentInfo] = useState();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    onChangeDataProfile();
    onChangeStudentInfo();
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.profilePage}>
        {dataProfile !== undefined ?
          <>
            <UserInfo dataProfile={dataProfile} />
            <SutentInfo studentInfo={studentInfo} />
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => { onChangeIsLoggedIn(false) }}>
              <View>
                <Text style={styles.logoutText}>
                  Выйти
                </Text>
              </View>
            </TouchableOpacity>
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
  logoutButton: {
    height: 30,
    width: '95%',
    borderRadius: 4,
    backgroundColor: '#ffadad',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoutText: {
    fontWeight: 'bold',
    color: '#A60000'
  }
})
