import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import MainNavigator from './MainNavigator';
import SignUp from '../auth/SignUpScreen';
import LogScreen from '../auth/LogScreen';
import BottomContent from '../main/profile/profileBottomMenu/BottomContent';
import ProfileFollowers from '../main/profile/ProfileFollowers';
import ProfileFollowingScreen from '../main/profile/ProfileFollowing';

StatusBar.setBarStyle('light-content');

export default function AppNavigator({ navigation }) {

  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
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
      /> */}
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{ title: '', headerShown: false }}
        NavigateToStoryCamera={NavigateToStoryCamera}
      />
      <Stack.Screen
        name="Bottom"
        component={BottomContent}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen name='FolllowerScreen' component={ProfileFollowers}
        options={{ title: '', headerShown: false }} />
      <Stack.Screen name='ProfileFollowingScreen' component={ProfileFollowingScreen}
        options={{ title: '', headerShown: false }} />
    </Stack.Navigator>
  );
}