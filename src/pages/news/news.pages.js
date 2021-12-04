import React from "react";
import { ScrollView, View, Text } from "react-native";
import storage from "../../utils/storage.utils";
import { getNews } from "../../api/api.get";

export const News = () => {

  storage.load({
    key: 'token',
    id: 228,
  })
    .then(ret => {
      getNews(ret)
    })
    .catch(err => {
      console.warn(err.message);
    });

  return (
    <ScrollView>
      <View>
        <Text>NEWS</Text>
      </View>
    </ScrollView>
  )
}