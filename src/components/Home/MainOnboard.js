import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';

import AppLoading from 'expo-app-loading';

import Onboarding from './Onboarding';

export default function MainOnboard() {

  const { isLogedIn } = useContext(MainContext)

  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Onboarding />
        <View style={styles.linkbox} >
            <View style={styles.containerNav}>
              <Text style={styles.text} onPress={() => navigation.navigate("HomeStack")}>
                Skip
              </Text>
              <Text style={styles.text} onPress={() => navigation.navigate("LoginDecision")}>
                Sign In
              </Text>
            </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNav: {
    width: "100%",
    flexDirection:"row",
    justifyContent:"space-around",
    // backgroundColor:"#d6d6d6",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "PlayfairDisplay_600SemiBold",
    color: "#646262"
  },
  linkbox: {
    width: 250,
    marginTop: 50,
    alignItems: "flex-end",
  },

});