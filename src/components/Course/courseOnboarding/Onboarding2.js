import React, {useRef, useState} from "react";
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'

import slides from './slides'
// import OnboardItem from './OnboardItem'
import Paginator from './Paginator'
import Course2 from "./Course2";
//

const Onboarding1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <View style={{flex:3}}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <Course2 />}
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
     
    </View>
  )
}

export default Onboarding1

const styles = StyleSheet.create({})