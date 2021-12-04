import React, { useState } from "react";
import { useWindowDimensions, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import RenderHtml from 'react-native-render-html';

export const PreviewNews = (data, { navigation }) => {

  const [openMoreInfo, setOpenMoreInfo] = useState(false);
  const { width } = useWindowDimensions();

  const source = {
    html: data.data.html
  };

  const tagsStyles = {
    p: {
      color: '#74788d',
      fontSize: 15,
      marginTop: 1,
      marginBottom: 10,
    },
  };
  return (
    <View style={styles.component}>
      <TouchableOpacity onPress={() => {
        openMoreInfo === false ?
          setOpenMoreInfo(true)
          :
          setOpenMoreInfo(false)
      }}>
        <Text style={styles.title}>
          {data.data.title}
        </Text>
        <Text style={styles.preview}>
          {data.data.preview}
        </Text>
        {openMoreInfo !== false ?
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
          />
          :
          null
        }
        <View style={styles.timeView}>
          <Text style={styles.timeText}>
            {data.data.published_at}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#ffffff',
    width: '95%',
    padding: 10,
    marginTop: 10,
    borderRadius: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#48465b',
    marginBottom: 12,
  },
  preview: {
    color: '#74788d',
    fontSize: 15,
    marginBottom: 12,
  },
  timeView: {
    backgroundColor: '#f0f3ff',
    padding: 5,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  timeText: {
    fontWeight: 'bold',
    color: '#5d78ff',
  }
})
