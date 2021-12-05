import React, { useState, useCallback } from "react";
import { RefreshControl, View, Text, StyleSheet, ScrollView } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations, getSession, getEducationYear } from "../../api/api.get";
import { Subject, FilterSubject } from "../../components/components.export";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const Evaluations = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [dataEvaluations, onChangeDataEvaluations] = useState();
  const [dataSession, setDataSession] = useState();
  const [dataEducationYear, setDataEducationYear] = useState();
  const [filters, setFilters] = useState();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    onChangeDataEvaluations();
    setDataSession();
    setDataEducationYear();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (dataEvaluations === undefined && dataSession === undefined && dataEducationYear === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getEvaluations(ret, onChangeDataEvaluations);
        getSession(ret, setDataSession);
        getEducationYear(ret, setDataEducationYear);
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <>
      {dataEvaluations !== undefined ?
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          <FilterSubject dataSession={dataSession} dataEducationYear={dataEducationYear} setFilters={setFilters} />
          <View>
            {
              dataEvaluations !== undefined ?
                dataEvaluations.map((subject) => {
                  if (filters === undefined) {
                    return (
                      <Subject props={subject} key={subject.id} />
                    );
                  } else if (filters[0] === null && filters[1] === null) {
                    return (
                      <Subject props={subject} key={subject.id} />
                    );
                  } else if (filters[0] !== null && filters[1] !== null) {
                    if (filters[0] === subject.year_title && filters[1] === subject.semester) {
                      return (
                        <Subject props={subject} key={subject.id} />
                      );
                    }
                  } else if (filters[0] !== null && filters[1] === null) {
                    if (filters[0] === subject.year_title) {
                      return (
                        <Subject props={subject} key={subject.id} />
                      );
                    }
                  } else if (filters[1] !== null) {
                    if (filters[1] === subject.semester) {
                      return (
                        <Subject props={subject} key={subject.id} />
                      );
                    }
                  }

                })
                :
                null
            }
          </View>
        </ScrollView>
        :
        <View style={styles.containerLoad}>
          <Text style={styles.textLoad}>Загрузка...</Text>
        </View>
      }
    </>

  )
}

const styles = StyleSheet.create({
  containerLoad: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLoad: {
    color: '#595d6e'
  }
})
