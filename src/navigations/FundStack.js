import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FundScreen from '../views/Fund/FundScreen';
import FundDetailScreen from '../views/Fund/FundDetailScreen';

const Stack = createStackNavigator();

const FundStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Fund' component={FundScreen} />
      <Stack.Screen name='FundDetail' component={FundDetailScreen} />
    </Stack.Navigator>
  );
};

export { FundStackNavigator };
