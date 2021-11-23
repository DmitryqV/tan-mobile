import React from "react";
import { View, Text } from "react-native";
import storage from "../../utils/storage.utils";
import { getEvaluations } from "../../api/api.get";

export const Evaluations = () => {

  storage.load({
    key: 'token',
    id: 228,
  })
    .then(ret => {
      getEvaluations(ret)
    })
    .catch(err => {
      console.warn(err.message);
    });

  return (
    <View>
      <Text>ЗАЧЕТНАЯ КНИЖКА</Text>
    </View>
  )
}
