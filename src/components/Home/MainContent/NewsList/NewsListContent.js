import { StyleSheet, Text, View, Image, Modal, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import { MaterialIcons } from '@expo/vector-icons';

const NewsListContent = ({ item }) => {

    const [modalVisible, setModalVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        PlayfairDisplay_400Regular,
        PlayfairDisplay_500Medium,
        PlayfairDisplay_600SemiBold,

    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={{}}>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <ScrollView style={{ margin: 20 }}>
                        <Text style={[styles.title, { fontWeight: "bold" }]} >{item.title} </Text>
                        <Text style={{ marginTop: 15, }}>{item.description}</Text>
                        <Text style={{ marginTop: 15 }}>{item.text}</Text>
                    </ScrollView>
                    <Pressable
                        onPressIn={() => setModalVisible(false)}
                        style={{
                            flexDirection: "row",
                            alignSelf: "center",
                            marginBottom: 20
                        }}>
                        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                        <Text>Back</Text>
                    </Pressable>
                </Modal>

                <Pressable style={styles.pressable} onPress={() => setModalVisible(true)}>
                    <View style={[styles.container, styles.card, styles.elevation]}>
                        <Image source={item.image} style={[styles.image]} />
                    </View>
                    <View style={{ flex: 0.3 }} >
                        <Text style={styles.title} >{item.title} </Text>
                        {/* <Text style={styles.description}>{item.description} </Text> */}
                    </View>
                </Pressable>
            </View>
        )
    }
}

export default NewsListContent

const styles = StyleSheet.create({
    pressable: {
        height: 300,
        width: 180,
        marginRight: 20,
        marginLeft: 20,
        alignItems: "center"
    },
    container: {
        height: 150,
        width: 180,
        marginHorizontal: 20,
    },
    image: {
        flex: 1.2,
        width: 170,
        resizeMode: "cover",
    },
    title: {
        fontWeight: "800",
        fontSize: 14,
        color: "#493d8a",
        textAlign: "center",
        fontFamily: "PlayfairDisplay_400Regular",
    },
    description: {
        fontWeight: "300",
        color: "#62656b",
        textAlign: "center",
        fontFamily: "PlayfairDisplay_400Regular",
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#493d8a',
    },
})