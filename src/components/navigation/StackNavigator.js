import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainPage from '../Home/MainPage';
import Login from '../Login/Login';
// import Impressum from '../Impressum/Impressum';
import Signin from '../Signin/Signin';
import Onboarding1 from '../Course/courseOnboarding/Onboarding1';
import Courses from '../Course/Courses';
import LoginDecision from '../Login/LoginDecision';
// import OnboardingScreen from '../Home/OnboardingScreen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="HomeStack" component={MainPage} />
      <Stack.Screen name="LoginDecision" component={LoginDecision} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin}/>
      {/* <Stack.Screen name="Impressum" component={Impressum}/> */}
      
    </Stack.Navigator>
  )
}

export const CoursesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CoursesStack" component={Courses}/>
      <Stack.Screen name="Onboarding1" component={Onboarding1}/>
    </Stack.Navigator>
  )
}

// module.exports = {
//   HomeStack,
//   CoursesStack
// }

const styles = StyleSheet.create({})