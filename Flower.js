import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Flower() {
  return (
    <View style={styles.container}>
      <Text>Grow your flower!</Text>
      <Text>Ansku</Text>
      <StatusBar style="auto" />
      <Image
        style={styles.imageContainer}
        source={
          require('./flower.png')
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    imageContainer: {
      width: '70%',
      height: '70%',
      resizeMode: 'contain',
      backgroundColor: 'transparent',
    },
});