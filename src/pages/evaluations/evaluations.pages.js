import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations, getSession, getEducationYear } from "../../api/api.get";
import { Subject, FilterSubject } from "../../components/components.export";

export const Evaluations = () => {

  const [dataEvaluations, onChangeDataEvaluations] = useState();
  const [dataSession, setDataSession] = useState();
  const [dataEducationYear, setDataEducationYear] = useState();
  const [filters, setFilters] = useState();

  console.log(filters);
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
        <ScrollView>
          <FilterSubject dataSession={dataSession} dataEducationYear={dataEducationYear} setFilters={setFilters} />
          <View>
            {
              dataEvaluations !== undefined ?
                dataEvaluations.map((subject) => {
                  return (
                    <Subject props={subject} key={subject.id} />
                  );
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
