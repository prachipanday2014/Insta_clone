import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import images from '../../../res/images';
import colors from '../../../res/colors';

export default function PostHeader() {
  const [Data, setData] = useState([])
  // console.log("HeaderData", Data);

  const ID = '61a5d4d05396e71ae2cc6fb8'
  const Api = `http://188.166.189.237:3001/api/v1/post/postDetails/${ID}`;
  useEffect(() => {
    async function getData() {
      const request2 = fetch(Api, {
        method: "GET",
        headers: {
          "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRjM2Q4YjA2MzMyMDJjODQ4Y2I0MCIsImlhdCI6MTY0MTE4MjY2MSwiZXhwIjoxNjQxMjY5MDYxfQ.vBLkwyMP4osC1tNzz5qgKPdyZKaMteRaubg_s8J_sqY',
        }
      });
      const response = await request2;
      const parsed2 = await response.json();
      setData(parsed2.data);
    }
    getData();
  }, []);

  if (Data === [] || undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <View style={Styles.container}>
        <View style={Styles.nameContainer}>
          <Image
            source={{ uri: Data.imgUrl }}
            style={Styles.personImage}
          />
          <View>
            <Text style={Styles.personName}> {Data.username} </Text>
            <Text style={Styles.placeName}> {Data.placeName} </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Image source={images.more} style={Styles.iconMore} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  personName: {
    color: colors.text,
    marginStart: 10,
    fontWeight: 'bold',
  },
  placeName: {
    color: colors.text,
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 15,
  },
});
