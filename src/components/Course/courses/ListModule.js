import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import slides from './slides'
import ListContent from './ListContent'

const ListModule = () => {
  const size = useWindowDimensions();
  return (
    <View>
      <Text style={{height:50, marginTop:30, textAlign: "center", fontSize:20, fontWeight:"bold"}}>Title Module</Text>
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        vertical
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate="normal"
        style={{ height: size.height }}
        renderItem={({ item }) => <ListContent item={item} />}
      />
    </View>
  )
}

export default ListModule

const styles = StyleSheet.create({

})