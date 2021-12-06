import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import styles from "./Styles";
import { signIn, store } from "./SigninReducer";
import { initializeUser, userStore } from "./UserReducer";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Post user data to backend to authenticate and use it to sign in
  const postData = () => {
    const data = { username: username, password: password };
    fetch("https://bloom-app.azurewebsites.net/token-auth/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token != undefined) {
          //change SigninReducer value to true to login
          //change userReducer value to current user
          userStore.dispatch(initializeUser(data.user));
          store.dispatch(signIn(true));
        } else {
          store.dispatch(signIn(false));
          Alert.alert("Wrong password or username");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.loginContainer}>
      <Image style={styles2.image} source={require("../assets/image.png")} />
      <Text style={styles2.title}>Welcome to Bloom</Text>
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Username"
          textContentType="name"
          autoCapitalize="none"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={postData} style={styles2.loginBtn}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles2.registerBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles2 = StyleSheet.create({
  title: {
    fontFamily: "serif",
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
    borderColor: "black",
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
    marginTop: 20,
    backgroundColor: "rgb(116, 144, 147)",
  },
  registerBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "transparent",
  },
  image: {
    width: "45%",
    height: "35%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    backgroundColor: "transparent",
  },
});
