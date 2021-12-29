import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import addIcon from '../../../../res/images/add.png'
import menuIcon from '../../../../res/images/list3.png'


function Header(props) {

    return (
        <View style={styles.header}>

            <TouchableOpacity>
                <Text style={{ color: "white" }}>User_name</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuButton, { marginLeft: 0, left: 80 }]} >
                <Image source={addIcon} style={{ height: 25, width: 25, tintColor: "white" }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButton} onPress={() => props.bs.current.snapTo(0)} >
                <Image source={menuIcon} style={{ height: 20, width: 20, tintColor: "white" }} />
            </TouchableOpacity>

        </View>
    )
}

export default Header
const styles = StyleSheet.create({

    header: {
        flex: 0.1,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        flexDirection: 'row',
        height: 55,
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    menuButton: {
        left: 50

    }
})