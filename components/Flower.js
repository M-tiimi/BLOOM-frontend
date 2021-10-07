import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, Alert, ScrollView} from 'react-native';
import images from '../Image';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';

export default function Flower() {

  let hour = new Date().getHours();

  const [points, setPoints] = useState(0);
  const [flowerImg, setFlowerImg] = useState(images.image3); 
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  //send user's anwer to back through dialog button 
  const postData = (answer) => {
    setVisible(false);
    console.log(answer);
    const data = {title: answer};
    fetch('http://192.168.43.17:8000/answers/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          console.log('Success: Data sent')
        }
        else {
          console.log('Error: Data sending failed')
        }
      })
      .catch(err => console.error(err))
    }
    
  //get question from back and open dialog with input if the time is right
 useEffect( () => {
  fetch(`http://192.168.43.17:8000/questions/`)
      .then(response => response.json())
      .then(data =>{
        setQuestion(data[0].title) 
        console.log(hour)
        if (hour <= 23 && hour >= 11){
          setVisible(true);
        } else {
          console.log("Not the time yet")
        } 
      }) 
      .catch((e) => console.log(e)) 
  }, []);

  const buttonPressed = () => { 
    const sum = points + 2;
    setPoints(sum);
    if (sum >= 6 && sum <= 10) {
      setFlowerImg(images.image2)
    }
    else if (sum > 10) {
      setFlowerImg(images.image1)
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.dialogContainer}>
        <Dialog.Container visible={visible}>
          <Dialog.Description style={{fontSize: 20}}>{question}</Dialog.Description>
          <Dialog.Input
            onChangeText={text => setAnswer(text)}
          />
          <Dialog.Button style={styles.buttonContainer} label='Submit' onPress={() => postData(answer)} />
          <Dialog.Button style={styles.buttonContainer} label='Cancel' onPress={handleCancel} />
        </Dialog.Container>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Make your flower bloom!</Text>
        <Text style={styles.textContainer}>Points: {points}</Text>
        <TouchableNativeFeedback onPress = {showDialog}>
          <View style={styles.iconContainer}>
          <Text style={{color: 'white'}}>Show alert</Text> 
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Ate a proper meal</Text>
        <TouchableNativeFeedback onPress={buttonPressed}>
            <View  style={styles.touchContainer}>
              <MaterialCommunityIcons 
                name="food-apple-outline" 
                style={styles.iconContainer} 
                />
            </View>
          </TouchableNativeFeedback>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Exercised for 10 minutes</Text>
        <TouchableNativeFeedback onPress={buttonPressed}>
            <View  style={styles.touchContainer}>
              <Ionicons 
                name="barbell-outline"
                style={styles.iconContainer}
              />
            </View>
          </TouchableNativeFeedback>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Brushed teeth</Text>
        <TouchableNativeFeedback onPress={buttonPressed}>
            <View  style={styles.touchContainer}>
              <MaterialCommunityIcons
                name="tooth-outline"
                style={styles.iconContainer}
              />
            </View>
          </TouchableNativeFeedback>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Slept well</Text>
        <TouchableNativeFeedback onPress={buttonPressed}>
            <View  style={styles.touchContainer}>
            <MaterialCommunityIcons
                name="sleep"
                style={styles.iconContainer}
              />
            </View>
          </TouchableNativeFeedback>  
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Did something that made me happy</Text>
        <TouchableNativeFeedback onPress={buttonPressed}>
            <View  style={styles.touchContainer}>
              <Ionicons 
                name="happy-outline"
                style={styles.iconContainer}
              />
            </View>
          </TouchableNativeFeedback>
      </View>
          {/* Laita kuva jotenkin viewin sisään? */}
            <Image
              style={styles.imageContainer}
              source={flowerImg} 
            />
        
    </View>
    </ScrollView>
  );
}

 // Tee tyyleille oma kansio
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 18,
  },
  touchContainer: {
    padding: 3,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  iconContainer: {
    color: 'white', 
    alignSelf: 'stretch',
    backgroundColor: 'rgb(136, 136, 250)',
    fontSize: 35,
    borderRadius: 100,
    marginTop:10, 
    paddingVertical: 10, 
    paddingHorizontal: 15,
    padding: -200,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    backgroundColor: 'rgb(136, 136, 250)',
    fontSize: 20, 
    color: 'white',
    borderRadius: 15, 
    marginTop:10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  imageContainer: {
    flex: 1,
    width: 200, 
    height: 200,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  dialogContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); 