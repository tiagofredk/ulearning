import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainContext } from '../../../context/MainContext';
// import { CartContext } from './CartContext';

export function CartIcon({navigation}) {
  // const {getItemsCount} = useContext(CartContext);
  const {items, setItems, getItemsCount, addItemToCart, getTotalPrice} = useContext(MainContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      > Cart ({getItemsCount()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'orange',
    height: 42,
    padding: 12,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});