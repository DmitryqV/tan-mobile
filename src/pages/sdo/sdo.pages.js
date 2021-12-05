import React from "react";
// import { View, Text } from "react-native";
import { WebView } from 'react-native-webview';
import storage from "../../utils/storage.utils";
import { getSdoLink } from "../../api/api.get";

export const Sdo = () => {

  storage.load({
    key: 'token',
    id: 228,
  })
    .then(ret => {
      getSdoLink(ret)
    })
    .catch(err => {
      console.warn(err.message);
    });

  return (
    <WebView source={{ uri: 'https://sdo.pgups.ru' }} />
  )
}