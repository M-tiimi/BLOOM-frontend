import React, { useEffect, useState } from 'react';
import Flower from './components/Flower';
import Information from './components/Information';
import Login  from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { signIn, store, changeSignInValue} from './components/testreducer';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flower" component={Flower} />
    </Stack.Navigator>
  );
};
  
const AuthStack = ( ) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={ Login }  />
    </Stack.Navigator>
  );
};

export default function App() {

  const [isSigned, setIsSigned] = useState(false);
  
  
 

  //update state from redux
  store.subscribe(() => {
   setIsSigned(store.getState());
  })

  
 


  return (
    <NavigationContainer>
      {isSigned ? <AppStack/> : <AuthStack />}
    </NavigationContainer>
  );
}

/*<NavigationContainer>
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
      
      </Tab.Navigator> */