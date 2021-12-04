import React, { useState, useCallback } from "react";
import { RefreshControl, ScrollView, View, Text } from "react-native";
import storage from "../../utils/storage.utils";
import { getNews } from "../../api/api.get";
import { PreviewNews } from "../../components/components.export";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const News = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [newsData, setNewsData] = useState()

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setNewsData()
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


  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <View>
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