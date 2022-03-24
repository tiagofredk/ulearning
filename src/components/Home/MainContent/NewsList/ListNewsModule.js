import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import slides from './slides'
import NewsListContent from './NewsListContent'

const ListNewsModule = () => {
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
    renderItem={({ item }) => <NewsListContent item={item} />}
    />
  )
}

export default ListNewsModule

const styles = StyleSheet.create({
    renderview:{        
        height: 240,
        marginBottom: 100
    }
})