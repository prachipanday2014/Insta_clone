import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';


function Time() {
    return (
        <View style = {styles.container}>
            <Text style = {{color:"white"}}>Time on Instagram</Text>
        </View>
    )
}

export default Time;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    }
})
