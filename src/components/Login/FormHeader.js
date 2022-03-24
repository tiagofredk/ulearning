import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';

const FormHeader = ({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) => {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <View style={styles.container}>
          <Text
            style={[
              styles.heading,
              { transform: [{ translateX: leftHeaderTranslateX }] },
            ]}
          >
            {leftHeading}
          </Text>
          <Text
            style={[
              styles.heading,
              {
                opacity: rightHeaderOpacity,
                transform: [{ translateY: rightHeaderTranslateY }],
              },
            ]}
          >
            {rightHeading}
          </Text>
        </View>
        <Text style={styles.subHeading}>{subHeading}</Text>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    color: '#1b1b33',
    fontFamily:"PlayfairDisplay_600SemiBold",
    marginTop:20,
  },
  subHeading: {
    fontSize: 14,
    color: '#1b1b33',
    textAlign: 'center',
    fontFamily: "PlayfairDisplay_400Regular",
    marginTop:22,
    marginBottom: 32
  },
});

export default FormHeader;
