import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import ProfileHeader from './ProfileHeader';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';

export default function profileScreen() {
  const [Data, setData] = useState([]);
  console.log("data", Data);

  const data = [
    { "key": "1" }
  ];

  const API = 'http://188.166.189.237:3001/api/v1/users/me';
  useEffect(() => {
    async function getData() {
      const request = fetch(API, {
        method: "GET",
        headers: {
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjM2Q4YjA2MzMyMDJjODQ4Y2I0MCIsImlhdCI6MTY0MDc1NTI0MywiZXhwIjoxNjQwODQxNjQzfQ.5A-Px60y1mD-T9qmDZsKTa8wIhLnV_JhUH8PENVVe9A'
        }
      });
      const response = await request;
      const parsed = await response.json();
      setData(parsed.data);
    }
    getData();
  }, []);

  if (Data === [""] || undefined) {
    return (
      <View style={{
        backgroundColor: "black", justifyContent: 'center',
        alignItems: "center", flex: 1
      }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <FlatList
        style={{ flex: 1, backgroundColor: colors.bottomBackGround }}
        data={data}
        renderItem={({ item, index }) => (
          <>
            <ProfileHeader data={Data} />
            <UserBio data={Data} />
            <EditProfileButton />
            <ConstantStories />
            <LineSeperator />
            <GridIcon />
            <ProfileGrid />
          </>
        )}
      />
    );
  }
}
