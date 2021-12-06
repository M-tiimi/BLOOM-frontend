import React, { useState } from "react";
import { Text, View, TextInput, Alert, TouchableOpacity } from "react-native";
import styles from "./Styles.js";

export default function Register({ navigation }) {
  const [newuser, setNewUser] = useState("");
  const [password, setPassword] = useState("");
  const [birth_year, setBirth_year] = useState("");
  const [email, setEmail] = useState("");

  const createNewUser = () => {
    const dataToPost = {
      username: newuser,
      password: password,
      birth_year: birth_year,
      email: email,
      points: 0,
      is_active: true,
      is_admin: false,
    };
    fetch(`http://bloom-app.azurewebsites.net/`, {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert("New user created succesfully");
        setNewUser("");
        setPassword("");
        setBirth_year("");
        setEmail("");
        navigation.goBack();
      })
      .catch((e) => console.error(e));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please type in your credentials</Text>
      <View style={styles.inputView}>
        <TextInput
          value={newuser}
          placeholder="username"
          onChangeText={(newuser) => setNewUser(newuser)}
          style={styles.registerInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={styles.registerInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={birth_year}
          placeholder="birth year"
          onChangeText={(birth_year) => setBirth_year(birth_year)}
          style={styles.registerInput}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={email}
          placeholder="email"
          onChangeText={(email) => setEmail(email)}
          style={styles.registerInput}
        />
      </View>
      <TouchableOpacity onPress={createNewUser} style={styles.loginBtn}>
        <Text>Create user</Text>
      </TouchableOpacity>
    </View>
  );
}
