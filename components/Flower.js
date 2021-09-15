import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import images from '../Image';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function Flower() {

  const [points, setPoints] = useState(0);
  const [flowerImg, setFlowerImg] = useState(images.image3); 


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

  const buttonPressed = () => {
    setPoints(points +2)
    if (points >= 6 && points <= 10) {
      setFlowerImg(images.image2)
    }
    else if (points > 10) {
      setFlowerImg(images.image1)
    }
    

  }

  return (
    
    <View style={styles.container}>
      <View style={styles.container}>
        <Button title="Show alert" onPress={showAlert} />
        <Text>Make your flower bloom!</Text>
        <Text>Points: {points}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Ate a proper meal</Text>
          <Button onPress={buttonPressed}
            icon={
              <MaterialCommunityIcons
                name="food-apple-outline"
                size={24} 
                color="white" 
              />
            }
          /> 
        </View>
        <View style={styles.buttonContainer}>
          <Text>Exercised for 10 minutes</Text>
          <Button onPress={buttonPressed}
            icon={
              <Ionicons 
                name="barbell-outline"
                size={25}
                color="white"
              />
            }
          />
      </View>
      <View style={styles.buttonContainer}>
          <Text>Brushed teeth</Text>
          <Button onPress={buttonPressed}
            icon={
              <MaterialCommunityIcons
                name="tooth-outline" 
                size={24}
                color="white" 
              />
            }
          />
      </View><View style={styles.buttonContainer}>
          <Text>Slept well</Text>
          <Button onPress={buttonPressed}
            icon={
              <MaterialCommunityIcons
               name="sleep" 
               size={24} 
               color="white" 
              />
            }
          />
      </View><View style={styles.buttonContainer}>
          <Text>Did something that made me happy</Text>
          <Button onPress={buttonPressed}
            icon={
              <Ionicons 
                name="happy-outline" 
                size={24} 
                color="white" 
              />
            }
          />
      </View>
          
            <Image
              style={styles.imageContainer}
              source = {flowerImg} 
            />
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});