import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations, getSession } from "../../api/api.get";
import { Subject, FilterSubject } from "../../components/components.export";

export const Evaluations = () => {

  const [dataEvaluations, onChangeDataEvaluations] = useState();

  if (dataEvaluations === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getEvaluations(ret, onChangeDataEvaluations),
          getSession(ret)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <>
      {dataEvaluations !== undefined ?
        <ScrollView>
          <FilterSubject />
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
