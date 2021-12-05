import React, { useState } from "react";
import { WebView } from 'react-native-webview';
import storage from "../../utils/storage.utils";
import { getSdoLink } from "../../api/api.get";
import ProgressBar from 'react-native-progress/Bar';

export const Sdo = () => {

  const [linkSdo, setLinkSdo] = useState();
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  if (linkSdo === undefined) {
    storage.load({
      key: 'token',
      id: 228,
    })
      .then(ret => {
        getSdoLink(ret, setLinkSdo)
      })
      .catch(err => {
        console.warn(err.message);
      });
  }

  return (
    <>
      {
        !isLoaded ?
          <ProgressBar
            progress={progress}
            width={null}
            borderWidth={0}
            borderColor={'#ffffff00'}
            borderRadius={0}
            height={4}
          />
          :
          null
      }

      <WebView
        source={{ uri: linkSdo }}
        onLoadEnd={() => setIsLoaded(true)}
        onLoadProgress={({ nativeEvent }) => {
          setProgress(nativeEvent.progress);
          setIsLoaded(false);
        }}
      />
    </>
  )
}