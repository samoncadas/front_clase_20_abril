import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { OtroScreen } from './OtroScreen'
import Register from './views/public/Register';
import Login from './views/public/Login';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button screen="Details">Go to Details</Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screens: {
    Home: HomeScreen,
    OtroScreen: OtroScreen,
    Register: Register,
    Login: Login
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Router() {
  return <Navigation />;
}