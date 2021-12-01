import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import styles from './Styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function SetActivities() {

    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState('');


    const addTask= () => {
        console.log("add task")
        const dataToPost = {
            title: activity,
            user: {
                id: 3,
                username: "Maija",
                password: "pbkdf2_sha256$260000$t526iliEA0XAaOb4IYiumA$Yp7XUZ6y64nXvZfK+aBYBGdcdz9Fm/8yw5B0sKuPLJ4=",
                birth_year: 1998,
                email: "maija@maili.com",
                points: 20
         
            }
        };
        fetch(`http://bloom-app.azurewebsites.net/tasks/`,
          {
            method: 'POST',
            body: JSON.stringify(dataToPost),
            headers: { 'Content-type': 'application/json' }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
        } )
          .catch(e => console.error(e))
      }
    


    return (

        <View style={styles.container}>
            <TextInput
                value={activity}
                onChangeText={text => setActivity(text)}
                style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button color='rgb(116, 144, 147)'  onPress={addTask} title="add a new task" />
            <FlatList
                data={activities}
                keyExtractor={((item, index) => index.toString())}
                renderItem={({ item }) =>
                    <View style={styles.touchContainer}>
                        <Text>{item.key}</Text>
                        <AntDesign.Button 
                            backgroundColor="rgb(116, 144, 147)" 
                            onPress={() => console.log(`${item.key}`)} 
                            name="checkcircleo" 
                            size={24} 
                            color="black" />
                    </View>
                }
            />
        </View>
    );
}

