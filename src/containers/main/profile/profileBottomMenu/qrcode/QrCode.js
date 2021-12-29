import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function QrCode() {
    return (
        <View style={styles.container}>
            <Text>
                Qr Code Screen
            </Text>
        </View>
    )
}

export default QrCode

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
