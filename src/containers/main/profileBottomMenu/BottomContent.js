import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import settingIcon from '../../../res/images/settings.png'
import savedIcon from '../../../res/images/bookmark.png'
import insight from '../../../res/images/insight.png'
import youractivity from '../../../res/images/youractivity.png'
import qrcode from '../../../res/images/qrcode.png'
import addfrinds from '../../../res/images/addfriends.png'
import closefrnd from '../../../res/images/closefrnd.png'
import love from '../../../res/images/love.png'
import archiveIcon from '../../../res/images/archive.png'
import meta from '../../../res/images/meta.png'


export default function BottomContent(props) {


    return (
        <View style={styles.panel}>

            <TouchableOpacity onPress={() => props.navigation.navigate("settingScreen")} style={styles.contents}>
                <Image source={settingIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Settings</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("archive")} style={styles.contents}>
                <Image source={archiveIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Archive</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("insight")} style={styles.contents}>
                <Image source={insight} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Insights</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("youractivity")} style={styles.contents}>
                <Image source={youractivity} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Your activity</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("qrcode")} style={styles.contents}>
                <Image source={qrcode} style={styles.logoStyle} />
                <Text style={styles.textStyle}>QR code</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("saved")} style={styles.contents}>
                <Image source={savedIcon} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Saved</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("closefriends")} style={styles.contents}>
                <Image source={closefrnd} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Close friends</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("discoverpeople")} style={styles.contents}>
                <Image source={addfrinds} style={styles.logoStyle} />
                <Text style={styles.textStyle}>Discover people</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate("covid")} style={styles.contents}>
                <Image source={love} style={styles.logoStyle} />
                <Text style={styles.textStyle}>COVID-19 Information Centre</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: "black",
        padding: 20,
        paddingTop: 20,
        height: 550,
        zIndex: 0,
        flexDirection: "column",
        flex: 1,
    },
    contents: {
        flexDirection: "row",
        width: "100%",
        marginVertical: 10
    },
    textStyle: {
        left: 15,
        fontSize: 16,
        color: "white"
    },
    logoStyle: {
        tintColor: "white",
        height: 20,
        width: 20,
    },
    text: {
        fontSize: 16,
        color: "skyblue",
        paddingLeft: 5
    }

})
