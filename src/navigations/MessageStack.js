import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MessageScreen from '../views/Message/MessageScreen';

const Stack = createStackNavigator();

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Message' component={MessageScreen} />
    </Stack.Navigator>
  );
};

export { MessageStackNavigator };
