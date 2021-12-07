import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, View, Text, StyleSheet } from 'react-native';
import storage from '../../utils/storage.utils';
import { getOrders } from '../../api/api.get';
import { Order } from '../../components/components.export';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const Oredrs = ({ navigation }) => {

  const [refreshing, setRefreshing] = useState(false);
  const [dataOrders, setDataOrders] = useState();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setDataOrders();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  if (dataOrders === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getOrders(ret, setDataOrders)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  React.useEffect(
    () => navigation.addListener('focus', () => setDataOrders()),
    []
  );

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {dataOrders !== undefined ?
          <>
            <View style={styles.headerSpans}>
              <Text style={styles.headerSpan}>Номер</Text>
              <Text style={styles.headerSpan}>Дата приказа</Text>
            </View>
            <View>
              {dataOrders.map((order) => {
                return <Order props={order} key={order.id} />
              })}
            </View>
          </>
          :
          null
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  subject: {
    backgroundColor: '#ffffff',
    minHeight: 50,
    padding: 10,
    borderTopWidth: 1.5,
    borderColor: '#f2f3f8',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerSpans: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
  headerSpan: {
    color: '#595d6e',
    fontWeight: 'bold',
    fontSize: 15
  },
  date: {
    marginRight: 25,
    color: '#595d6e'
  },
})
