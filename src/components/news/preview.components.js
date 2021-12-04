import React from "react";
import { useWindowDimensions, View, Text, StyleSheet } from "react-native";
import RenderHtml from 'react-native-render-html';

export const PreviewNews = (data, { navigation }) => {

  const { width } = useWindowDimensions();
  const source = {
    html: data.data.html
  };
  return (
    <View style={styles.component}>
      <Text style={styles.title} onPress={() => navigation.navigate('profile')}>
        {data.data.title}
      </Text>
      <Text style={styles.preview}>
        {data.data.preview}
      </Text>
      <RenderHtml
        contentWidth={width}
        source={source}
      />
      <View style={styles.timeView}>
        <Text style={styles.timeText}>
          {data.data.published_at}
        </Text>
      </View>
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
    alignSelf: 'flex-start'
  },
  timeText: {
    fontWeight: 'bold',
    color: '#5d78ff',
  }
})
