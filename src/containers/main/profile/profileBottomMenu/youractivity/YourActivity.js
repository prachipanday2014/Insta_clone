import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Links from './Links';
import Time from './Time';
import colors from '../../../../../res/colors';


const Tab = createMaterialTopTabNavigator();

function YourActivity() {

    const tabBarOptions = {
        activeTintColor: 'white',
        inactiveTintColor: "black",
        indicatorStyle: { backgroundColor:colors.textInputBackground, height: '100%' },
        pressOpacity: 1,
    }

    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen name="LINKS" component={Links} />
            <Tab.Screen name="TIME" component={Time} />
        </Tab.Navigator>
    )
}

export default YourActivity

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
