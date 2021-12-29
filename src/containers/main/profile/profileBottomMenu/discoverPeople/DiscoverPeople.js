import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function DiscoverPeople() {
    return (
        <View style={styles.container}>
            <Text>
                Discover people
            </Text>
        </View>
    )
}

export default DiscoverPeople

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
