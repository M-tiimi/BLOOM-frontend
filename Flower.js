import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function Flower() {

  const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "Mitä kuuluu?",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  return (
    <View style={styles.container}>
      <View style={styles.container}>
    <Button title="Show alert" onPress={showAlert} />
  </View>
      <Text>Grow your flower!</Text>
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