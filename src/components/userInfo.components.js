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
        </View>
      </View>
      <Text style={styles.persInfoData}>
        <Text style={styles.persInfoSpan}>Дата рождения{"\n"}</Text>
        {dataProfile.birth_date}
      </Text>
      <Text style={styles.persInfoData}>
        <Text style={styles.persInfoSpan}>Пол{"\n"}</Text>
        {dataProfile.sex}
      </Text>
      {dataProfile.email_verified_at !== null ?
        <Text style={styles.persInfoData}>
          <Text style={styles.persInfoSpan}>Электронная почта{"\n"}</Text>
          {dataProfile.email}
        </Text>
        :
        <Text style={styles.notVerified}>
          <Text style={styles.persInfoSpan}>Электронная почта </Text>
          <Text style={styles.verifiedButton}>(подтвердить){"\n"}</Text>
          {dataProfile.email}
        </Text>
      }
      {dataProfile.phone_verified_at !== null ?
        <Text style={styles.persInfoData}>
          <Text style={styles.persInfoSpan}>Телефон{"\n"}</Text>
          +{dataProfile.prefix} {dataProfile.phone}
        </Text>
        :
        <Text style={styles.notVerified}>
          <Text style={styles.persInfoSpan}>Телефон </Text>
          <Text style={styles.verifiedButton}>(подтвердить){"\n"}</Text>
          +{dataProfile.prefix} {dataProfile.phone}
        </Text>
      }
      <Text style={styles.persInfoData}>
        <Text style={styles.persInfoSpan}>Дата регистрации{"\n"}</Text>
        {dataProfile.created_at}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userInfo: {
    backgroundColor: '#ffffff',
    width: '95%',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  persInfoSpan: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 15 : 18,
    maxWidth: windowWidth <= 330 ? 198 : windowWidth - 120,
    color: '#646c9a',
  },
  persInfoData: {
    color: '#646c9a',
    marginBottom: 5,
  },
  notVerified: {
    color: '#fd397a',
    marginBottom: 5,
  },
  verifiedButton: {
    color: '#5867dd'
  },
  name: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 15 : 18,
    maxWidth: windowWidth <= 330 ? 198 : windowWidth - 120,
    color: '#48465b'
  }
})
