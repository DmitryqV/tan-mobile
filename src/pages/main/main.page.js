import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import storage from "../../utils/storage.utils";
import { NewsBlock } from "../../components/components.export";
import { getNews } from "../../api/api.get";

export const Main = () => {

  const [newsData, setNewsData] = useState();

  if (newsData === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getNews(ret, setNewsData)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <View style={styles.container}>
      <NewsBlock newsData={newsData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f3f8',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
})
