import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#8DA0D0',
    backgroundColor: '#fff',
  },
});
