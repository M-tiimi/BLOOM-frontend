import React from 'react';
import Flower from './components/Flower';
import Information from './components/Information';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Flower"
          component={Flower}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="flower" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Information"
          component={Information}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}