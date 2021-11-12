import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { } from './src/pages/index.export.js';
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
