import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Information() {

  const data = [
    {
      id: '1',
      title: 'Phone Numbers',
    },
    {
      id: '2',
      title: 'Chats',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];

  return (
      <View style={styles.container}>
        <Text>Bloom information page</Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.title}</Text>
          }
      />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    marginTop: 50,
    marginBottom: 15,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1 
  },
});