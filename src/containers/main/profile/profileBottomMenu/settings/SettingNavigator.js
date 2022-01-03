import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


// import Ads from './Ads/Ads';

// import FollowInvite from './FollowInvite';
import Privacy from './Privacy/Privacy';
import Theme from './Theme';

function SettingNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>

            {/* <Stack.Screen name='account' component={Account} /> */}
            {/* <Stack.Screen name='ads' component={Ads} /> */}
            {/* <Stack.Screen name='creator' component={Creator} /> */}
            {/* <Stack.Screen name='followInvite' component={FollowInvite} /> */}
            <Stack.Screen name='privacy' component={Privacy} />
            <Stack.Screen name='Theme' component={Theme} />
        </Stack.Navigator>
    )
}

export default SettingNavigator
