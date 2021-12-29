import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from './About';
import Account from './Account';
import Ads from './Ads';
import Creator from './Creator';
import FollowInvite from './FollowInvite';
import Privacy from './Privacy';
import Theme from './Theme';

function SettingNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='about' component={About} />
            <Stack.Screen name='account' component={Account} />
            <Stack.Screen name='ads' component={Ads} />
            <Stack.Screen name='creator' component={Creator} />
            <Stack.Screen name='followInvite' component={FollowInvite} />
            <Stack.Screen name='privacy' component={Privacy} />
            <Stack.Screen name='theme' component={Theme} />
        </Stack.Navigator>
    )
}

export default SettingNavigator
