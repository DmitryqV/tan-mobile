import React, { useState } from 'react';
import { View, Text } from 'react-native';
import storage from '../../utils/storage.utils';
import { getOrders } from '../../api/api.get';
import { Order } from '../../components/components.export';

export const Oredrs = () => {

  const [dataOrders, setDataOrders] = useState();

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
      {dataOrders !== undefined ?
        <View>
          {dataOrders.map((order) => {
            return <Order props={order} key={order.id} />
          })}
        </View>
        :
        null
      }
    </>
  )
}
