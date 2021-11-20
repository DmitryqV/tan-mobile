import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const UserInfo = ({ dataProfile }) => {
  return (
    <View style={styles.userInfo}>
      <View style={styles.mainInfo}>
        <View style={styles.profilePicture}></View>
        <View style={styles.mainInfoText}>
          <Text style={styles.name}>{dataProfile.full_name}</Text>
          <Text style={{ color: '#757ca5' }}>
            {dataProfile.email}
          </Text>
          {/* <Text style={{ color: '#757ca5' }}>
            <Text style={styles.spanBold}>Дата рождения: </Text>
            {dataProfile.birth_date}
          </Text>
          <Text style={{ color: '#757ca5' }}>
            <Text style={styles.spanBold}>Пол: </Text>
            {dataProfile.sex}
          </Text> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userInfo: {
    backgroundColor: '#ffffff',
    width: '95%',
    padding: 15,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profilePicture: {
    backgroundColor: '#242939',
    width: 80,
    height: 80,
    borderRadius: 50
  },
  mainInfoText: {
    marginLeft: 10
  },
  spanBold: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 15 : 16,
    maxWidth: windowWidth <= 330 ? 198 : null,
    color: '#646c9a'
  },
  name: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 15 : 18,
    maxWidth: windowWidth <= 330 ? 198 : windowWidth - 120,
    color: '#48465b'
  }
})