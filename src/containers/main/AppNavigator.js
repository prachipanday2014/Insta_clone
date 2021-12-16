import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import MainNavigator from './MainNavigator';
import SignUp from '../auth/SignUpScreen';
import LogScreen from '../auth/LogScreen';

StatusBar.setBarStyle('light-content');

export default function AppNavigator({ navigation }) {
  const [validate, setValidate] = React.useState(false);

  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  const Stack = createStackNavigator();
  return validate ? (
    <MainNavigator />
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LogScreen}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{ title: '', headerShown: false }}
        NavigateToStoryCamera={NavigateToStoryCamera} />
    </Stack.Navigator>
  );
}