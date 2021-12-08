import React, { useEffect, useState } from 'react';
import storage from '../../utils/storage.utils';
import { View, Text, StyleSheet } from 'react-native';
import { getSchedule, getLessons } from '../../api/api.get';

export const Schedule = () => {
  const [state, setState] = useState();
  const [lessons, setLessons] = useState([]);
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
  }

  return (
    <View>
      {
        state !== undefined ?
          <Text>
            группа {state.group.title}
            {state.group.faculty.accusativecasetitle}
            <View style={styles.container}>
              {state.grid.week_days_study.map((el, index) => {
                return (
                  <View key={el}>
                    <Text>{el}</Text>
                    <View>
                      {lessons.filter((el) => el.time.weekday === index).map((el) => {
                        if (el.time.odd > 0) {
                          return (
                            <View key={el.time.id}>
                              <Text>{el.time.number}) {el.time.start_time} / {el.time.end_time} {el.workplan_row.title} {el.type.title}</Text>
                              <Text>{el.room}</Text>
                              <View>
                                {el.teachers.map(el => {
                                  return <Text key={el.id}>{el.name}</Text>
                                })}
                              </View>
                            </View>
                          );
                        }
                      })}
                    </View>
                  </View>
                )
              })}
            </View>
          </Text>
          :
          null
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 'auto',
    flex: 1,
    flexDirection: 'column',
  },
});
