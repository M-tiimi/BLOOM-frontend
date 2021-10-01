import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import images from '../Image';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


export default function Flower() {

let hour = new Date().getHours();

  const [points, setPoints] = useState(0);
  const [flowerImg, setFlowerImg] = useState(images.image3); 
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [hours, setHours] = useState(hour); 


  //vvoi lahettaa answerissa olevaa tietoa buttonin avulla
  const postData = (ab) => {
    const a = {title: ab}
    console.log(ab)
    fetch('http://192.168.100.3:8000/answers/',
      {
        method: 'POST',
        body: JSON.stringify(a),
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

    //useEffectin sisassa kysymysten haku, alertin teko ja sen kutsuminen seka vastauksen lahettaminen tai cancel
    
  
 useEffect( () => {
  fetch(`http://192.168.100.3:8000/questions/`)
      .then(response => response.json())
      .then(data =>{
         setQuestion(data[0].title) 

        const showAlert = () => {
          Alert.prompt(
            data[0].title,
            '',
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              {
                text: "Submit",
                onPress: (ab) => { 
                  setAnswer(ab);
                  postData(ab);
                }
              }
            ],
            'plain-text'
          );
      
        };
        if (hours <= 23 && hours >= 11 ){
          showAlert();
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

 
  const showA = () => {
    Alert.prompt(
      question,
      '',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Submit",
          onPress: (ab) => { 
            setAnswer(ab);
            postData(ab);
          }
        }
      ],
      'plain-text'
    );
    }

  const timer = () => {
  if (hours <= 23 && hours >= 11 ){
    showA();
  } else {
    console.log("Not the time yet")
  }
}


  
  
  return (
    <ScrollView style={{ backgroundColor: 'white', marginHorizontal: 20 }}>
      <View style={styles.container}>
        <Button title="Show alert" style={{padding: 10}} onPress = {timer} />
        <Button title='sendAnswer' onPress={() => postData(answer)}> </Button>
        <Text>Make your flower bloom!</Text>
        <Text>Points: {points}</Text>
        <Text> {answer}</Text>
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
      </View>
      <View style={styles.buttonContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
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
         
    </ScrollView>
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
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});

// 'rgba(255, 0, 0, 0.5)'