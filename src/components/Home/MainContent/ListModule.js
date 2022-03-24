import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import slides from './slides'
import ListContent from './ListContent'

const ListModule = () => {
  return (
    <FlatList
    data={slides}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
    horizontal
    snapToAlignment={"start"}
    scrollEventThrottle={16}
    decelerationRate="normal"
    style={styles.renderview}
    renderItem={({ item }) => <ListContent item={item} />}
    />
  )
}

export default ListModule

const styles = StyleSheet.create({
    renderview:{
      height: 240,
        // backgroundColor: "#afafaf",
        // height: 200,
        // width: 200,
        // marginHorizontal: 10,
    }
})