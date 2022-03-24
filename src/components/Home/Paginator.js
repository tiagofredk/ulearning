import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native'
import React from 'react'

const Paginator = ({data, scrollX}) => {
  
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {

        const inputRange = [(i-1) * width, i * width, (i + 1) * width];

        const dotWidht = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp"
        })

        return <Animated.View style={[styles.dot, {width:dotWidht}]} key={i.toString()} />;
      })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container:{
        // flex:1,
        backgroundColor: "#ADD8E6",
        justifyContent:"center",
        // alignItems:"center",
        flexDirection: "row", 
        height:74
    },
    dot: {
      height: 10,
      borderRadius: 5,
      backgroundColor: "#ffffff",
      marginHorizontal: 8,
    }
})