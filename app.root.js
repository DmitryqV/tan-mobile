import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/styles/app.style';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';

export const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={ } />
        <Route path="/main" element={ } />
      </Routes>
    </NativeRouter >
  );
}
