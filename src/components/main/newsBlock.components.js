import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PreviewNews } from "../components.export";

export const NewsBlock = ({ newsData }) => {

  const [slideNum, setSlideNum] = useState(0);

  return (
    newsData !== undefined ?
      <View style={styles.newsBlock}>
        <View style={styles.newsBlockHeader}>
          <Text style={styles.newsBlockTitle}>Информация</Text>
          <View style={styles.sliderButtons}>
            <TouchableOpacity
              onPress={() => {
                let previousSlide = slideNum;
                previousSlide !== 0 ? previousSlide-- : null;
                setSlideNum(previousSlide);
              }}
            >
              <View style={styles.sliderButton}>
                <Text style={[styles.buttonBack, { transform: [{ rotate: "180deg" }] }]}>&#5171;</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                let nextSlide = slideNum;
                nextSlide !== newsData.length - 1 ? nextSlide++ : null;
                setSlideNum(nextSlide);
              }}
            >
              <View style={styles.sliderButton}>
                <Text style={styles.buttonNext}>&#5171;</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <PreviewNews data={newsData[slideNum]} />
      </View>
      :
      null
  )
}

const styles = StyleSheet.create({
  newsBlock: {
    width: '95%',
    backgroundColor: '#ffffff'
  },
  newsBlockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  newsBlockTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#595d6f',
  },
  sliderButtons: {
    flexDirection: 'row',
  },
  sliderButton: {
    width: 25,
    height: 25,
    backgroundColor: '#f0f3ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginLeft: 15,
  },
  buttonBack: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 2,
    color: '#93a2dd',
    fontWeight: 'bold',
  },
  buttonNext: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#93a2dd',
    fontWeight: 'bold',
  }
})
