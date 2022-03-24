import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Modal, Pressable, TouchableOpacity, useWindowDimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import {
    useFonts,
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

const ListContent = ({ item }) => {
    const width = useWindowDimensions()
    const navigation = useNavigation()

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
            <View>

                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View>
                        <Image source={item.image} style={styles.modalimage} />
                        <Text style={styles.modaltitle} >{item.title}</Text>
                        <Text style={[styles.modaldescription, { textAlign: "center" }]}>{item.description}</Text>
                        <Text style={styles.modaltext} >{item.text}</Text>
                        <Text style={{ textAlign: "center", marginTop: 10 }}>COURSE OVERVIEW</Text>
                        {/* <Text style={{textAlign: "center", padding:5}}>About the course</Text> */}
                        <Text style={styles.modaldescription}>{item.overview}</Text>
                        <Text style={{ textAlign: "center", marginTop: 40 }}>LAUNCH YOUR CAREER IN TECH NOW!</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.modalbutton}>
                            <Text style={{ textAlign: "center", }}>Apply Now</Text>
                        </TouchableOpacity>
                    </View>

                    <Pressable
                        onPressIn={() => setModalVisible(false)}
                        style={{
                            flexDirection: "row",
                            alignSelf: "flex-end",
                            marginBottom: 0,
                            marginTop: 40,
                            marginRight: 20
                        }}>
                        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                        <Text>Close</Text>
                    </Pressable>

                </Modal>

                <Pressable onPress={() => setModalVisible(true)}>
                    <View style={[styles.container, styles.card, styles.elevation]} >
                        <Image source={item.image} style={[styles.image]} />
                        <View style={{ flex: 0.3 }} >
                            <Text style={styles.title} >{item.title} </Text>
                            <Text style={styles.description}>{item.description} </Text>
                        </View>
                    </View>
                </Pressable>


            </View>


        )
    }
}

export default ListContent

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 180,
        marginHorizontal: 20,
    },
    image: {
        flex: 1.2,
        width: 170,
        resizeMode: "cover"
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
    modalcontainer: {
        width: 300, height: 600
    },
    modalimage: {
        width: 350,
        height: 200
    },
    modaltitle: {
        fontWeight: "800",
        fontSize: 20,
        color: "#493d8a",
        textAlign: "center",
        fontFamily: "PlayfairDisplay_400Regular",
    },
    modaldescription: {
        fontWeight: "300",
        color: "#62656b",
        padding: 5,
        margin: 5,
    },
    modaltext: {
        fontWeight: "300",
        color: "#62656b",
        textAlign: "center",
        padding: 5,
    },
    modalbutton: {
        width: 100,
        height: 40,
        backgroundColor: "#97c3e7",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        alignSelf: "center",
        marginTop: 20
    }
})