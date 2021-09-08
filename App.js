import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Flower from './Flower';
import Information from './Information';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator>
       <Tab.Screen name="Flower page" component={Flower} />
       <Tab.Screen name="Information" component={Information} />
     </Tab.Navigator>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
