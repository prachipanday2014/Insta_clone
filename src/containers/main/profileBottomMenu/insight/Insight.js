import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Insight() {
    return (
        <View style={styles.container}>
            <Text style = {{color:"white"}}>
                Insight Screen
            </Text>
        </View>
    )
}

export default Insight

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    }
})
