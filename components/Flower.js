import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, ScrollView, Button } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import styles from './Styles.js';
import LottieView from 'lottie-react-native';

export default function Flower() {

  let hour = new Date().getHours();

  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [visible, setVisible] = useState(false);
  const [prediction, setPrediction] = useState('');

  const animation = useRef(null);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  // TODO: gives prediction about answer is it good or bad
  const getPrediction = () => {
  const dataToPost = {data: 'I hate life'};
    fetch(`http://192.168.100.3:8000/ml-model/`,
      {
        method: 'POST',
        body: JSON.stringify(dataToPost),
        headers: { 'Content-type': 'application/json' }
      })
      .then(response => response.json())
      .then((data) => console.log(data))
      .catch(e => console.error(e))
    }
  
  
  // activity button pressed and points increase by two
  const buttonPressed = () => {
    setPoints(points => points + 2)
  }

  // last animation frames
  const feelingGood = () => {
    animation.current.play(80, 400);
  }
  // second animation frames
  const feelingOkay = () => {
    animation.current.play(0, 80);
  }

  // sends user's answer to back through dialog button 
  const postData = (answer) => {
    setVisible(false);
    const data = { title: answer };
    fetch('http://bloom-app.azurewebsites.net/answers/',
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
      .catch(e => console.error(e))
  }

  // gets question from back and open dialog with input if the time is right
  useEffect(() => {
    fetch(`http://bloom-app.azurewebsites.net/questions/`)
      .then(response => response.json())
      .then(data => {
        setQuestion(data[0].title)
        if (hour <= 23 && hour >= 11) {
          setVisible(true);
        } else {
          console.log("Not the time yet")
        }
      })
      .catch((e) => console.log(e))
  }, []);

  // checks the activity points everytime they change and choose the correct animation
  useEffect(() => {
    if (points >= 6 && points <= 10) {
      feelingOkay();
    }
    else if (points > 10) {
      feelingGood();
    }
    else if (points > 0 && points < 6) {
      animation.current.reset();
    } else {
      setPoints(0);
    }
  }, [points])

  // hourly timer to decrease the points due to inactivity (for testing purposes every 10sec)
  useEffect(() => {
    if (points == 0) {
      return;
    }
    const timer = setInterval(() => {
      setPoints(points => points - 2)
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [points]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.dialogContainer}>
          <Button color='rgb(116, 144, 147)' title='getPrediction' onPress={getPrediction}> </Button>
          <Dialog.Container visible={visible}>
            <Dialog.Description style={{ fontSize: 20 }}>{question}</Dialog.Description>
            <Dialog.Input
              onChangeText={text => setAnswer(text)}
            />
            <Dialog.Button style={styles.buttonContainer} label='Submit' onPress={() => postData(answer)} />
            <Dialog.Button style={styles.buttonContainer} label='Cancel' onPress={handleCancel} />
          </Dialog.Container>
        </View>
        <View style={styles.touchContainer}>
          <Text style={styles.textContainer}>Make your flower bloom!</Text>
          <Text style={styles.textContainer}> Points: {points}</Text>
          <TouchableNativeFeedback onPress={showDialog}>
            <View style={styles.iconContainer}>
              <Text style={{ color: 'white' }}>Show alert</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.touchContainer}>
          <Text style={styles.textContainer}>Ate a proper meal</Text>
          <TouchableNativeFeedback onPress={buttonPressed}>
            <View style={styles.touchContainer}>
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
            <View style={styles.touchContainer}>
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
            <View style={styles.touchContainer}>
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
            <View style={styles.touchContainer}>
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
            <View style={styles.touchContainer}>
              <Ionicons
                name="happy-outline"
                style={styles.iconContainer}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={styles.animationContainer}>
          <LottieView
            ref={animation}
            style={styles.animationStyle}
            source={require('../assets/flower_animation.json')}
            loop={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}

