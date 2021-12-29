import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import Post from '../post/Post'
import colors from '../../../res/colors';
import StoryContainer from '../story/StoryContainer';

export default function homeScreen({ navigation }) {
  const [Data, setData] = useState([])
  // console.log("dara", Data);

  const API = 'http://188.166.189.237:3001/api/v1/users/feed';
  useEffect(() => {
    async function getData() {
      const request = fetch(API, {
        method: "GET",
        headers: {
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjM2Q4YjA2MzMyMDJjODQ4Y2I0MCIsImlhdCI6MTY0MDc1NTI0MywiZXhwIjoxNjQwODQxNjQzfQ.5A-Px60y1mD-T9qmDZsKTa8wIhLnV_JhUH8PENVVe9A',
        }
      });
      const response = await request;
      const parsed = await response.json();
      setData(parsed.data);
    }
    getData();
  }, []);

  const storyOnPress = () => navigation.navigate('StoryScreen');

  const stories = [
    {
      key: 'JohnDoe',
      hasStory: true,
      src: 'https://picsum.photos/500',
    },
    {
      key: 'CarlaCoe',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'DonnaDoe',
      hasStory: true,
      src: 'https://picsum.photos/400',
    },
    {
      key: 'JuanDoe',
      hasStory: true,
      src: 'https://picsum.photos/300',
    },
    {
      key: 'MartaMoe',
      hasStory: true,
      src: 'https://picsum.photos/700',
    },
    {
      key: 'PaulaPoe',
      hasStory: true,
      src: 'https://picsum.photos/200',
    },
  ];

  if (Data === undefined) {
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
        style={{ backgroundColor: colors.background }}
        data={Object.values(Data)}
        ListHeaderComponent={() => (
          <StoryContainer stories={stories} storyOnPress={storyOnPress} />
        )}
        keyExtractor={item => item.postId}
        renderItem={({ item, index }) => (
          <Post data={item} />
        )}
      />
    );
  }
}
