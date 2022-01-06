import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Covid() {
    return (
        <View style={styles.container}>
            <Text style = {{color:"white"}}>
                Covid Information Screen
            </Text>
        </View>
    )
}

export default Covid

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    }
})
