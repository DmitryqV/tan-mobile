import React, { useState, useCallback } from "react";
import { RefreshControl, ScrollView, View, Text, StyleSheet } from "react-native";
import storage from "../../utils/storage.utils";
import { getNews } from "../../api/api.get";
import { PreviewNews } from "../../components/components.export";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const News = ({ navigation }) => {

  const [refreshing, setRefreshing] = useState(false);
  const [newsData, setNewsData] = useState();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setNewsData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

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

  React.useEffect(
    () => navigation.addListener('focus', () => setNewsData()),
    []
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <View style={styles.newsPage}>
        {newsData !== undefined ?
          newsData.map((news) => {
            return (
              <PreviewNews key={news.id} data={news} />
            )
          })
          :
          <Text>Загрузка...</Text>
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  newsPage: {
    backgroundColor: '#f2f3f8',
    flex: 1,
    alignItems: 'center',
  },
})
