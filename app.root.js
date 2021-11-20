import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Profile } from './src/pages/index.export.js';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
