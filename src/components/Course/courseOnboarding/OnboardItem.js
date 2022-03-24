import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const OnboardItem = ({ item }) => {
    const { width } = useWindowDimensions();
    
    return (
        <>
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]} />
            <View style={{ flex: 0.3 }} >
                <Text style={styles.title} >{item.title} </Text>
                <Text style={styles.description}>{item.description} </Text>
            
            </View>
        </View>
        </>
    )
}

export default OnboardItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ADD8E6",
        flex: 1,
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title: {
        fontWeight:"800",
        fontSize: 28,
        marginBottom:10,
        color:"#493d8a",
        textAlign:"center"
    },
    description: {
        fontWeight:"bold",
        fontSize: 20,
        color: "#62656b",
        textAlign: "justify",
        paddingHorizontal: 6,
    }
})