import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
   
    const navigation = useNavigation()
    
    return (
        <Pressable
        onPressIn={()=> navigation.navigate("Home")} 
        style={{
            flexDirection: "row",
            alignSelf:"center",
            marginBottom: 20
             }}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            <Text>Back</Text>
        </Pressable>
    )
}

export default Nav

const styles = StyleSheet.create({})