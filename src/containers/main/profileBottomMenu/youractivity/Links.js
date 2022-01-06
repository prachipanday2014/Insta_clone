import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';


function Links() {
    return (
        <View style = {styles.container}>
            <Text style = {{color:"white"}}>Links You've visited</Text>
        </View>
    )
}

export default Links;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    }
})
