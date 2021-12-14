import React, { useEffect, useState } from 'react';
import storage from '../../utils/storage.utils';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { getSchedule } from '../../api/api.get';

export const Schedule = () => {
  const [state, setState] = useState(undefined);
  const [lessons, setLessons] = useState([]);
  const [odd, setOdd] = useState(1);

  if (state === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getSchedule(ret, setState, setLessons);
      })
      .catch(err => {
        console.warn(err.message);
      });
  };

  return (
    state !== undefined ?
      <View style={styles.container}>
        <Text style={styles.h1}>
          {state.group.faculty.title} {'\n'}
          Группа {state.group.title}
        </Text>
        <View style={styles.controllers}>
          <Pressable style={[styles.controller, { backgroundColor: odd === 1 ? '#5d78ff' : '#ffffff' }]} onPress={() => setOdd(1)}>
            <Text style={{ color: odd === 1 ? '#ffffff' : '#5d78ff' }}>
              Четное
            </Text>
          </Pressable>
          <Pressable style={[styles.controller, { backgroundColor: odd === 0 ? '#5d78ff' : '#ffffff' }]} onPress={() => setOdd(0)}>
            <Text style={{ color: odd === 0 ? '#ffffff' : '#5d78ff' }}>
              Нечетное
            </Text>
          </Pressable>
        </View>
        <ScrollView>
          {state.grid.week_days_study.map((el, index) => {
            return (
              <View key={el}>
                <Text style={styles.h1}>{el}</Text>
                <View style={styles.weekdayItems}>
                  {lessons.filter((el) => el.time.weekday === index).map((el) => {
                    if (el.time.odd === odd) {
                      return (
                        <View key={el.time.id} style={styles.pair}>
                          <Text style={styles.h2}>{el.time.number} пара {el.time.start_time} - {el.time.end_time}</Text>
                          <Text style={styles.pairTitle}>{el.workplan_row.title}
                            <Text><Text style={styles.typePair}>{el.type.title}</Text></Text>
                          </Text>
                          <Text>Аудитория: {el.room}</Text>
                          <Text>
                            Преподаватель: {el.teachers.map(el => <Text key={el.id}>{el.name}</Text>)}
                          </Text>
                        </View>
                      );
                    }
                  })}
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
      :
      null
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    minWidth: 300,
    Width: '100%',
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
  },
  h1: {
    color: '#212121',
    fontSize: 16,
    fontWeight: 'bold'
  },
  h2: {
    color: '#212121',
    fontSize: 14,
    fontWeight: 'bold'
  },
  controllers: {
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    height: 38,
    gap: 20,
    paddingTop: 10,
    marginBottom: 20
  },
  controller: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 84,
    height: 32,
    backgroundColor: '#5d78ff',
    borderRadius: 4
  },
  weekdayItems: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    marginBottom: 15
  },
  pair: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 5,
    width: 'auto',
    height: 'auto',
    borderRadius: 4,
    gap: 5
  },
  pairTitle: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  typePair: {
    padding: 4,
    borderRadius: 5,
    backgroundColor: 'rgb(240, 243, 255)',
    fontWeight: 'bold',
    color: 'rgb(93, 120, 255)'
  }
});
