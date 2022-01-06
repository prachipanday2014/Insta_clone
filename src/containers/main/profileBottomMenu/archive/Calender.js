import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Calender() {
    return (
        <View style={styles.container}>
            <Text style={{ color: "white" }}>Calender screen</Text>
        </View>
    )
}

export default Calender;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
