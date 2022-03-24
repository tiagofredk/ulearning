import React, {useRef, useState} from "react";
import { StyleSheet, Text, View, FlatList, Animated, Button } from 'react-native'


import slides from './slides'
import OnboardItem from './OnboardItem'
import Paginator from './Paginator'
import UserProfile from "../../User/UserProfile";
import Chat from "../../Chat/Chat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


const tab = createBottomTabNavigator()

const Onboarding1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const navigation = useNavigation();

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <>
    <View style={{flex:3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
          useNativeDriver: false,
        })}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        
      />
      
      <Paginator data={slides} scrollX={scrollX} />

      {/*/ from here bottom navigation bar workspace*/}
      <View style={styles.tab}>
          
        <Text style={styles.button} onPress={()=> navigation.navigate ("Courses") }>
          <MaterialIcons name="storefront" size={35}  color='#ADD8E6' /></Text>
        <Text style={styles.button} onPress={()=> navigation.navigate ("Chat") }>
          <AntDesign name="wechat" size={35} color="#ADD8E6" />
        </Text>
        <Text style={styles.button} onPress={()=> navigation.navigate ("News") }>
          <Entypo name="news" size={35} color="#ADD8E6" /></Text>
        <Text style={styles.button} onPress={()=> navigation.navigate ("UserProfile") }>
          <AntDesign name="user" size={35} color="#ADD8E6" />
        </Text>
      </View>

    </View>

    </>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
  tab:{
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    padding: 6, 
    //alignItems: 'center', 
    justifyContent: 'space-around',
  },
  courses:{
    backgroundColor: 'red',
    borderRadius: 4,
    fontWeight:'bold',
    fontSize: 20,
    color: 'white',
    textAlign: "center",
  },
})