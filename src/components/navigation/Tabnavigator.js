import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import MainPage from '../Home/MainPage';
import Courses from '../Course/Courses';
import UserProfile from "../User/UserProfile"
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
// import {HomeStack, CoursesStack} from './StackNavigator';


const Tabnavigator = () => {
  
    const Tab = createBottomTabNavigator();
    
    
    return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:false
      }}>
        <Tab.Screen name="Home" component={MainPage} options={{
            tabBarIcon: ({color, size}) => (
               <Ionicons name="ios-home-outline" size={size} color={'#aaaaaa'} />
                )
        }} />
        <Tab.Screen name="Courses" component={Courses} options={{
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="storefront" size={size} color={'#aaaaaa'} />
            )
        }}/>       
        <Tab.Screen name="Account" component={UserProfile} options={{
            tabBarIcon: ({color, size}) => (
                <AntDesign name="user" size={size} color={'#aaaaaa'} />
            )
        }}/>
      </Tab.Navigator>
  )
}

export default Tabnavigator

const styles = StyleSheet.create({})