import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';
import styles from './Styles';

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
            <Button onPress={() => setActivities([...activities, {key: `${activity}`}])} title="add a new task" />
            <FlatList
                data={activities}
                keyExtractor={((item, index) => index.toString())}
                renderItem={({ item }) =>
                    <Text style={styles.container}>{item.key}</Text>
                }
            />
        </View>
    );
}

