import React, { useState } from 'react';
import Flower from './components/Flower';
import Information from './components/Information';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { signIn, store } from './components/SigninReducer';
import SetActivities from './components/SetActivities';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Flower"
        component={Flower}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: 'rgb(116, 144, 147)',
          },
          headerRight: () => (
            <AntDesign.Button
              onPress={() => store.dispatch(signIn(false))}
              color="black"
              backgroundColor="rgb(116, 144, 147)"
              name="logout"
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Task"
        component={SetActivities}
        options= {{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" size={24} color="black" />
          ),
          headerStyle: {
            backgroundColor: 'rgb(116, 144, 147)',
          },
          headerRight: () => (
            <AntDesign.Button
              onPress={() => store.dispatch(signIn(false))}
              color="black"
              backgroundColor="rgb(116, 144, 147)"
              name="logout"
              size={28}
            />
          ),
        }} 
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: 'rgb(116, 144, 147)',
          },
          headerRight: () => (
            <AntDesign.Button
              onPress={() => store.dispatch(signIn(false))}
              color="black"
              backgroundColor="rgb(116, 144, 147)"
              name="logout"
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: 'rgb(116, 144, 147)',
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {

  const [isSigned, setIsSigned] = useState(true);

  // Update state from redux
  store.subscribe(() => {
    setIsSigned(store.getState());
  })

  return (
    // Check if 'isSigned' is true and change the path from 'Login' to 'Flower' if true    
    <NavigationContainer>
      {isSigned ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}