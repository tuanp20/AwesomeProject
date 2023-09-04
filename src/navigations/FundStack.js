import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FundScreen from '../views/Fund/FundScreen';

const Stack = createStackNavigator();

const FundStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Fund' component={FundScreen} />
    </Stack.Navigator>
  );
};

export { FundStackNavigator };
