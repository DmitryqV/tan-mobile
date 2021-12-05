import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations } from "../../api/api.get";
import { Subject } from "../../components/components.export";

export const Evaluations = () => {

  const [dataEvaluations, onChangeDataEvaluations] = useState();

  if (dataEvaluations === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getEvaluations(ret, onChangeDataEvaluations)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <>
      {dataEvaluations !== undefined ?
        <ScrollView>
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
