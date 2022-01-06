import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import MainNavigator from './MainNavigator';
import SignUp from '../auth/SignUpScreen';
import LogScreen from '../auth/LogScreen';
import BottomContent from '../main/profileBottomMenu/BottomContent';
import ProfileFollowers from '../main/profile/ProfileFollowers';
import ProfileFollowingScreen from '../main/profile/ProfileFollowing';
import SplashScreen from './SplashScreen';
import { useNavigation } from '@react-navigation/native';

StatusBar.setBarStyle('light-content');

export default function AppNavigator({ navigation }) {

  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  const Stack = createStackNavigator();

  function Auth() {
    return (
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
      </Stack.Navigator>
    )
  }

  function rootStack() {
    return (
      <Stack.Navigator>
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
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen initialRouteName="SplashScreen"
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen name='Auth' component={Auth}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name="root" component={rootStack}
        options={{
          headerShown: false
        }} />
    </Stack.Navigator>
  );
}