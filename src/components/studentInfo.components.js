import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const SutentInfo = ({ studentInfo }) => {
  return (
    <View style={styles.studentInfo}>
      {studentInfo !== undefined ?
        <>
          <Text style={styles.title}>Информация об обучении</Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Факультет{"\n"}</Text>
            {studentInfo.faculty}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Специализация{"\n"}</Text>
            {studentInfo.specialization_base}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Программа подготовки{"\n"}</Text>
            {studentInfo.subject_code} {studentInfo.subject}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Форма обучения{"\n"}</Text>
            {studentInfo.form}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Вид возмещения затрат{"\n"}</Text>
            {studentInfo.compensation_type}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Учебная группа{"\n"}</Text>
            {studentInfo.group}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Номер зачетной книжки{"\n"}</Text>
            {studentInfo.book_number}
          </Text>
          <Text style={styles.studentInfoData}>
            <Text style={styles.studentInfoSpan}>Курс обучения{"\n"}</Text>
            {studentInfo.course}
          </Text>
        </>
        :
        null
      }

    </View>
  )
}

const styles = StyleSheet.create({
  studentInfo: {
    backgroundColor: '#ffffff',
    width: '95%',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 16 : 19,
    maxWidth: windowWidth <= 330 ? 300 : windowWidth - 20,
    color: '#48465b',
    marginBottom: 15,
  },
  mainInfoText: {
    marginLeft: 10,
  },
  studentInfoSpan: {
    fontWeight: 'bold',
    fontSize: windowWidth <= 330 ? 15 : 18,
    maxWidth: windowWidth <= 330 ? 300 : windowWidth - 20,
    color: '#646c9a',
  },
  studentInfoData: {
    color: '#646c9a',
    marginBottom: 5,
  },
})
