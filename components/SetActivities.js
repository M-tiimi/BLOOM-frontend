import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import styles from './Styles';
import { AntDesign } from '@expo/vector-icons'; 

export default function SetActivities() {

    const [activities, setActivities] = useState([]);
    const [activity, setActivity] = useState('');


    return (

        <View style={styles.container}>
            <TextInput
                value={activity}
                onChangeText={text => setActivity(text)}
                style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
            />
            <Button color='rgb(116, 144, 147)'  onPress={() => setActivities([...activities, { key: `${activity}` }])} title="add a new task" />
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

