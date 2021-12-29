import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Saved() {
    return (
        <View style={styles.container}>
            <Text>
                Saved Screen
            </Text>
        </View>
    )
}

export default Saved

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
