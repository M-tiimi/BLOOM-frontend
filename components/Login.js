import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Dialog from 'react-native-dialog';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  RefreshControlBase,
  Alert
} from "react-native";
import styles from "./Styles";
import { signIn, store, changeSignInValue} from './testreducer';
import { dispatch } from 'redux';



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
 


  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  //for local developement http://192.168.100.3:8000/token-auth/
  
  const postData = () => {
    
    const data = {'username':username.toLowerCase(), 'password':password};
    fetch('http://192.168.100.3:8000/token-auth/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
      })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data.token != undefined){
        console.log(data);
        //change redux value to true
        store.dispatch(signIn(true))
        }else{
          store.dispatch(signIn(false))
          Alert.alert('Wrong password or username');

        }  
       
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error('Error:', error);
      });
    }

  return (
    <View style={styles.container}>
     {/* <StatusBar style="auto" />
      <View style={styles.dialogContainer}>
        <Dialog.Container visible={visible}>
          <Dialog.Description style={{fontSize: 20}}>Restore Password</Dialog.Description>
          <Dialog.Input
            label='E-mail address'
            onChangeText={text => setUsername(text)}
          />
          <Dialog.Button style={styles.buttonContainer} label='Submit' onPress={() => postData(username)} />
          <Dialog.Button style={styles.buttonContainer} label='Cancel' onPress={handleCancel} />
        </Dialog.Container>
  </View> */}
      <Image
          style={styles2.image}
          source={require('../assets/icon.png')}
        />
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Username"
          textContentType="name"
          autoCapitalize= 'none'
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize= 'none'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress = {showDialog}>
        <Text style={styles2.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={postData} style={styles2.loginBtn}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'black',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  image: {
    width: "35%",
    height: "25%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: "transparent",
  },
});