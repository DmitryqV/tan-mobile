import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { Login, Test } from './src/pages/index.export.js';

export const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Test />} />
      </Routes>
    </NativeRouter >
  );
}
