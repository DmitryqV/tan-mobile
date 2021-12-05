import React, { useEffect } from 'react';
import storage from '../../utils/storage.utils';
import { View, Text } from 'react-native';
import { getSchedule } from '../../api/api.get';

export const Schedule = () => {
  useEffect(() => {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getSchedule(ret);
      })
      .catch(err => {
        console.warn(err.message);
      });
  });

  return (
    <View>
      <Text> в разработке </Text>
    </View>
  );
};
