import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Button,
  TextInput

} from "react-native";
import styles from "./Styles.js";

 export default function Register() {
  const [newuser, setNewUser] = useState("");
  const [password, setPassword] = useState("");

  const createNewUser = () => {
    console.log("add user");
    const dataToPost = {
      username: newuser,
      password: password,
      birth_year: 1993,
      email: "newuser@maili.com",
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
        console.log(data);
      })
      .catch((e) => console.error(e));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={newuser}
        placeholder="username"
        onChangeText={(newuser) => setNewUser(newuser)}
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
      />
      <TextInput
        value={password}
        placeholder="password"
        onChangeText={(password) => setPassword(password)}
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
      />
      <Button
        color="rgb(116, 144, 147)"
        onPress={createNewUser}
        title="create user"
      />
    </View>
  );
}
