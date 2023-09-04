import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../views/Home/HomeScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator };
