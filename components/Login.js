import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert} from "react-native";
import styles from "./Styles";
import { signIn, store } from './SigninReducer';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Post user data to back to authenticate 
  const postData = () => {
    const data = { 'username': username.toLowerCase(), 'password': password };
    fetch('http://bloom-app.azurewebsites.net/token-auth/',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json' }
      })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        if (data.token != undefined) {
          console.log(data);
          //change redux value to true
          store.dispatch(signIn(true))
        } else {
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
      <Image
        style={styles2.image}
        source={require('../assets/image.png')}
      />
      <Text style={styles2.title}>Welcome to Bloom</Text>
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Username"
          textContentType="name"
          autoCapitalize='none'
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize='none'
          onChangeText={(password) => setPassword(password)}
        />
      </View>
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
  title: {
    fontFamily: 'serif',
    fontSize: 20, 
    marginBottom: 30, 
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
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "rgb(116, 144, 147)",
  },
  image: {
    width: "45%",
    height: "35%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
    marginBottom: 5,
    backgroundColor: "transparent",
  },
});