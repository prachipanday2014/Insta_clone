import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import colors from '../../../res/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddingPostDetails({ route }) {
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");
    const [tags, setTags] = useState("");

    async function posting() {
        var form = new FormData();

        const Demo_token = await AsyncStorage.getItem('TOKEN')

        form.append("image", img);
        form.append("caption", caption);
        form.append("location", location);
        form.append("tags", tags);

        fetch("http://188.166.189.237:3001/api/v1/post/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${Demo_token}`,
            },
            body: form
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response", responseJson);
            }).catch((error) => {
                console.log("err", error);
            })
    }

    const img = route.params.clicked
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black", alignItems: "center" }}>
            <Image source={{ uri: img }} style={{ width: "60%", height: "60%" }} resizeMode="contain" />
            <View style={styles.userNameContainer}>
                <TextInput
                    style={styles.userNameInput}
                    onChangeText={(text) => setCaption(text)}
                    placeholder="Enter Caption"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>
            <View style={styles.userNameContainer}>
                <TextInput
                    style={styles.userNameInput}
                    onChangeText={(text) => setLocation(text)}
                    placeholder="Enter Location"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>
            <View style={styles.userNameContainer}>
                <TextInput
                    style={styles.userNameInput}
                    onChangeText={(text) => setTags(text)}
                    placeholder="Enter Tags"
                    placeholderTextColor={colors.textFaded2}
                />
            </View>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={posting}>
                    <Text style={{ color: "white", fontSize: 18 }}>
                        Post
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AddingPostDetails;

const styles = StyleSheet.create({
    userNameContainer: {
        borderColor: '#262626',
        backgroundColor: colors.loginInputBackground,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 5,
        height: 40,
        width: "90%",
        justifyContent: 'center',
        //alignItems: 'center',
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    userNameInput: {
        marginStart: 5,
        color: 'white',
    },
})