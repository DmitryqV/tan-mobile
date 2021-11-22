import React, { useState } from 'react';
import SafeViewAndroid from './src/styles/app.style';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Profile, Main } from './src/pages/index.export.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="main" component={Main} options={{ drawerLabel: 'Home' }} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export const App = () => {

  const [isLoggedIn, onChangeIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ?
            <MyDrawer />
            :
            <Stack.Navigator>
              <Stack.Screen name="login" options={{ headerShown: false }}>
                {() => <Login onChangeIsLoggedIn={onChangeIsLoggedIn} />}
              </Stack.Screen>
            </Stack.Navigator>
          }
        </NavigationContainer>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}
