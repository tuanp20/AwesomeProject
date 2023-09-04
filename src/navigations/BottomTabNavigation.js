import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationScreen from '../views/Notification/NotificationScreen';
import { FundStackNavigator } from './FundStack';
import { HomeStackNavigator } from './HomeStack';
import { MessageStackNavigator } from './MessageStack';
import { SettingStackNavigator } from './SettingStack';
import Home from '../../assets/icon/home-icon.svg';
import Fund from '../../assets/icon/reminder-fund-icon.svg';
import Messages from '../../assets/icon/messages-icon.svg';
import Notification from '../../assets/icon/notification-icon.svg';
import Setting from '../../assets/icon/setting-icon.svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'white',
          borderTopWidth: 20,
          borderTopColor: 'yellow',
          borderBottomWidth: 10,
          borderBottomColor: 'yellow',
          height: 64, // Adjust this value to set the height
          marginHorizontal: 20,
        },
        tabStyle: {
          // position: 'relative',
          // height: 64, // Adjust this value to set the height
        },
        labelStyle: {
          fontSize: 12,
          color: 'black',
          marginBottom: 15,
          // paddingVertical: 10,
        },
        activeTintColor: '#F58F00',
        inactiveTintColor: 'transparent',
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9AC4F8',
          textAlign: 'center',
          //   fontSize: 14,
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        headerShown: false,
        tabBarStyle: { height: 64, paddingHorizontal: 15 },
        // labelBarStyle: { marginHorizontal: 15 },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} fill={color} stroke={'red'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Fund'
        component={FundStackNavigator}
        options={{
          tabBarLabel: 'Fund',
          tabBarIcon: ({ color, size }) => (
            <Fund color={color} fill={color} stroke={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Message'
        component={MessageStackNavigator}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <Messages color={color} fill={color} stroke={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Notification
              color={color}
              fill={color}
              stroke={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Setting'
        component={SettingStackNavigator}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Setting fill={color} stroke={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
