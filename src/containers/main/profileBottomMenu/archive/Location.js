import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Location() {
    return (
        <View style = {styles.container}>
            <Text style = {{color:"white"}}>Location Screen</Text>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black"
    }
})
