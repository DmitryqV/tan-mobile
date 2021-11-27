import React, { useState } from "react";
import { View } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations } from "../../api/api.get";
import { Subject } from "../../components/components.export";
import { ScrollView } from "react-native-gesture-handler";

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
  )
}
