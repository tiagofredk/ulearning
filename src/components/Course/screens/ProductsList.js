import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { Product } from "../components/Product";
import { getProducts } from "./ProductsService";

export function ProductsList () {

  const navigation = useNavigation();

function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => navigation.navigate('Onboarding1')}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(()=>{
      setProducts(getProducts());
  });

  return(
      <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item)=>item.id.toString()}
      data={products}
      renderItem={renderProduct}
      />
  )

}

const styles = StyleSheet.create({
    productsList:{
        backgroundColor: '#ffffff',

    },
    productsListContainer:{
        backgroundColor: '#ffffff',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    prod:{
      marginHorizontal: 1,
    }
})