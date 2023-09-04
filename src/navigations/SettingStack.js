import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../views/Setting/SettingScreen';
import DisplayScreen from '../views/Setting/DisplayScreen';
import FundAlertScreen from '../views/Setting/FundAlertScreen';
import ReminderToCloseFundScreen from '../views/Setting/ReminderToCloseFundScreen';
import SetCurrencyScreen from '../views/Setting/SetCurrencyScreen';
import LanguageScreen from '../views/Setting/LanguageScreen';
import VoteReminderScreen from '../views/Setting/VoteReminderScreen';

const Stack = createStackNavigator();

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Setting' component={SettingScreen} />
      <Stack.Screen name='Display' component={DisplayScreen} />
      <Stack.Screen name='FundAlert' component={FundAlertScreen} />
      <Stack.Screen
        name='ReminderToCloseFund'
        component={ReminderToCloseFundScreen}
      />
      <Stack.Screen name='VoteReminder' component={VoteReminderScreen} />
      <Stack.Screen name='SetCurrency' component={SetCurrencyScreen} />
      <Stack.Screen name='Language' component={LanguageScreen} />
    </Stack.Navigator>
  );
};

export { SettingStackNavigator };
