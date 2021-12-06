import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import styles from "./Styles";
import { userStore } from "./UserReducer";

export default function SetActivities() {
  const [activity, setActivity] = useState("");

  const addTask = () => {
    console.log("add task");
    let current_user = userStore.getState();
    const dataToPost = {
      title: activity,
      user: current_user,
    };
    fetch(`http://bloom-app.azurewebsites.net/tasks/`, {
      method: "POST",
      body: JSON.stringify(dataToPost),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setActivity("");
      })
      .catch((e) => console.error(e));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={activity}
        onChangeText={(text) => setActivity(text)}
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
      />
      <Button
        color="rgb(116, 144, 147)"
        onPress={addTask}
        title="add a new task"
      />
    </View>
  );
}
