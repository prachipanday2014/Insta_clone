import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function CloseFriends() {
    return (
        <View style={styles.container}>
            <Text>
                Close Friends screen
            </Text>
        </View>
    )
}

export default CloseFriends

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
