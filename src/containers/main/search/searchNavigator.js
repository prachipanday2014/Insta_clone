import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import searchScreen from './searchScreen';
import { View, Text, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../../res/colors';

export default function searchNavigator() {
  const Stack = createStackNavigator();
  // const [Data, setData] = useState([]);

  // const argument = [
  //   { name: "sachin" }
  // ]

  // const api = 'http://188.166.189.237:3001/api/v1/profile/:name';
  // const params = argument.map(i => Object.entries(i).map(([k,v]) => `=${v}`)).join('&')
  // let Apiwithparams = api + params
  // console.log("api", Apiwithparams);
  // useEffect(() => {
  //   async function getData() {
  //     const request = fetch(Apiwithparams, {
  //       method: "GET",
  //     });
  //     const response = await request;
  //     const parsed = await response.json();
  //     setData(parsed);
  //     console.log("searchData", Data);
  //   }
  //   getData();
  // }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
              <TextInput
                style={{
                  backgroundColor: colors.textInputBackground,
                  height: 35,
                  width: Dimensions.get('screen').width - 10,
                  fontWeight: 'bold',
                  borderRadius: 10,
                  paddingStart: 20,
                  fontSize: 16,
                  color: 'white',
                }}
                placeholder="Search"
                placeholderTextColor={colors.textFaded2}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
