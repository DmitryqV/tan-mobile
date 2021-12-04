import React from "react";
import { RefreshControl, ScrollView, View, Text } from "react-native";
import storage from "../../utils/storage.utils";
import { getNews } from "../../api/api.get";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const News = () => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

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
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
      <View>
        <Text>NEWS</Text>
      </View>
    </ScrollView>
  )
}