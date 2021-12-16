import React, { useState } from 'react';
import SafeViewAndroid from './src/styles/app.style';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Login,
  Profile,
  Main,
  Evaluations,
  Sdo,
  News,
  Oredrs,
  Payment,
  Schedule
} from './src/pages/index.export.js';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer({ onChangeIsLoggedIn }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="main" component={Main} options={{ drawerLabel: 'Главная', title: 'Главная' }} />
      <Drawer.Screen name="news" component={News} options={{ drawerLabel: 'Новости', title: 'Новости' }} />
      <Drawer.Screen name="profile" options={{ drawerLabel: 'Профиль', title: 'Профиль' }} >
        {() => <Profile onChangeIsLoggedIn={onChangeIsLoggedIn} />}
      </Drawer.Screen>
      <Drawer.Screen name="evaluations" component={Evaluations} options={{ drawerLabel: 'Оценки', title: 'Оценки' }} />
      <Drawer.Screen name="schedule" component={Schedule} options={{ drawerLabel: 'Расписание', title: 'Расписание' }} />
      <Drawer.Screen name="orders" component={Oredrs} options={{ drawerLabel: 'Приказы', title: 'Приказы' }} />
      <Drawer.Screen name="payment" component={Payment} options={{ drawerLabel: 'Оплата', title: 'Оплата' }} />
      <Drawer.Screen name="sdo" component={Sdo} options={{ drawerLabel: 'СДО', title: 'СДО' }} />
    </Drawer.Navigator >
  );
}

export const App = () => {

  const [isLoggedIn, onChangeIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ?
            <MyDrawer onChangeIsLoggedIn={onChangeIsLoggedIn} />
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
