import React, { useState, useCallback } from 'react';
import { ScrollView, RefreshControl, View } from 'react-native';
import storage from '../../utils/storage.utils';
import { getOrders } from '../../api/api.get';
import { Order } from '../../components/components.export';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export const Oredrs = () => {

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
          <View>
            {dataOrders.map((order) => {
              return <Order props={order} key={order.id} />
            })}
          </View>
          :
          null
        }
      </ScrollView>
    </>
  )
}
