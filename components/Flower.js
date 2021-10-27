import React, { useState, useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, ScrollView} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import styles from './Styles.js';
import LottieView from 'lottie-react-native';

export default function Flower() {

  const resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  let hour = new Date().getHours();

  const [points, setPoints] = useState(0);
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
      this.animation.play(0, 80)
    }
    else if (sum > 10) {
      this.animation.play(80, 400)
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
          <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={styles.animationStyle}
          source={require('../assets/flower_animation.json')}
          loop={false}
        />
      </View>
      </View>
    </ScrollView>
  );
}

