import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableNativeFeedback, ScrollView, FlatList, Alert, Linking, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Dialog from 'react-native-dialog';
import styles from './Styles.js';
import LottieView from 'lottie-react-native';
import { initializeUser, userStore } from './UserReducer.js';

export default function Flower({ navigation }) {

  let hour = new Date().getHours();

  const [points, setPoints] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [prediction, setPrediction] = useState('');
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');
  const [username, setUsername] = useState('');

  const animation = useRef(null);
 

  const showDialog = () => {
    setVisible(true);
  };


  const handleCancel = () => {
    setVisible(false);
  };

  const showDialog2 = () => {
    setVisible2(true);
  };

  const handleCancel2 = () => {
    setVisible2(false);
    navigation.navigate('Information');
  };

  // Gives prediction about answer is it good or bad
  const getPrediction = (answer) => {
    setVisible(false);
    const dataToPost = { data: answer };
    fetch(`http://bloom-app.azurewebsites.net/ml-model/`,
      {
        method: 'POST',
        body: JSON.stringify(dataToPost),
        headers: { 'Content-type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        setPrediction(data.prediction[1])
        console.log(data.prediction[1]);
        console.log(answer);
        console.log(data.prediction)
        if (prediction === ' data is negative') { //there's a space before data cause it doesnt work otherwise
          showDialog2();
        } else {
          Alert.alert('nice :)');
        }
      })
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

  //opens sekasin247 chat
  const openChat = () => {
    Linking.openURL('https://sekasin247.fi/');
    setVisible2(false);
  }

  //Get user's tasks
  useEffect(() => {
    let u = userStore.getState();
    fetch(`http://bloom-app.azurewebsites.net/task/${u.task[0]}`)
      .then(response => response.json())
      .then(data => {
        let list = [];
        list.push(data);
        setActivities(list);
        setPoints(userStore.getState().points);
        setUsername(userStore.getState().username);
      })
      .catch(e => console.error(e))
  });

  // gets question from back and open dialog with input if the time is right
  useEffect(() => {
    let u= userStore.getState().question[0]
    fetch(`https://bloom-app.azurewebsites.net/question/${u}`)
      .then(response => response.json())
      .then(data => {
        setQuestion(data.title)
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
        <Dialog.Container visible={visible}>
          <Dialog.Description style={{ fontSize: 20 }}>{question}</Dialog.Description>
          <Dialog.Input
            onChangeText={text => setAnswer(text)}
          />
          <Dialog.Button style={styles.buttonContainer} label='Submit' onPress={() => getPrediction(answer)} />
          <Dialog.Button style={styles.buttonContainer} label='Cancel' onPress={handleCancel} />
        </Dialog.Container>
      </View>
      <View style={styles.dialogContainer}>
        <Dialog.Container visible={visible2}>
          <Dialog.Description style={{ fontSize: 20 }}>Do you want talk?</Dialog.Description>
          <Dialog.Button style={styles.buttonContainer} label='Yes' onPress={openChat} />
          <Dialog.Button style={styles.buttonContainer} label='No' onPress={handleCancel2} />
        </Dialog.Container>
      </View>
      <View style={styles.touchContainer}>
        <Text style={styles.textContainer}>Hello {username}</Text>
        <Text style={styles.textContainer}> Points: {points}</Text>
        <TouchableNativeFeedback onPress={showDialog}>
          <View style={styles.iconContainer}>
            <Text style={{ color: 'white' }}>Show alert</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={activities}
          keyExtractor={((item, index) => index.toString())}
          renderItem={({ item }) =>
            <View style={styles.touchContainer}>
              <Text>{item}</Text>
              <AntDesign.Button
                backgroundColor="rgb(116, 144, 147)"
                onPress={buttonPressed}
                name="checkcircleo"
                size={24}
                color="black" />
            </View>
          }
        />
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

