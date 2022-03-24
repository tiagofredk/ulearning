import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';
import Module1 from './MainContent/Module1';
import ListModule from './MainContent/ListModule';
import ListNewsModule from './MainContent/NewsList/ListNewsModule';

export default function MainPage() {
  const { user, setUser, isLogedIn } = useContext(MainContext);
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
      <View style={styles.container}>
        <View style={styles.linkbox} >
          {isLogedIn ?

            <Text style={styles.text} onPress={() => navigation.navigate("Account")}>Hello {user}</Text>

            :

            <Text style={styles.text} onPress={() => navigation.navigate("LoginDecision")} title="Login">
              Sign In
            </Text>
          }
        </View>
        <ScrollView >
          <View style={styles.container}>
            <Module1 />
            <Text style={styles.courses}>Our Courses</Text>
            <ListModule />
            <Text style={styles.news}>News</Text>
            <ListNewsModule />
          </View>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontFamily: "PlayfairDisplay_600SemiBold",
    // backgroundColor:"red",
    // marginRight:0,
    color: "#3b3b3b",
  },
  linkbox: {
    marginTop: 30,
    marginRight: 10,
    alignItems: "flex-end",
    backgroundColor: "#f5f5f5"
  },
  courses: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 19,
    fontWeight: "bold"
  },
  news: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 19,
    fontWeight: "bold"
  }
});
