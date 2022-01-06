import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Saved() {
    return (
        <View style={styles.container}>
            <Text style = {{color:"white"}}>
                Saved Screen
            </Text>
        </View>
    )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    }
})
