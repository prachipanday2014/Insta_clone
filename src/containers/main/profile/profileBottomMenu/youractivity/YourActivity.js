import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function YourActivity() {
    return (
        <View style={styles.container}>
            <Text>
                Your Activity Screen
            </Text>
        </View>
    )
}

export default YourActivity

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
