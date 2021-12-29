import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Archive() {
    return (
        <View style={styles.container}>
            <Text>
                Archive Screen
            </Text>
        </View>
    )
}

export default Archive

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
