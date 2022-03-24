import { Button, StyleSheet, View, Image, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../../assets/logo.png";
import Background from "../../../assets/background_image.png";
const Impressum = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Logo} style={styles.logo} alt="Logo" />
          <Image
            source={{
              uri: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-gradient-kiranshastry.png",
            }}
            style={styles.logo}
          />
        </View>
        <Image source={Background} style={styles.background} alt="Background" />
        <View style={styles.body}>
          <Text>
            U-Learning - Web Development School{"\n"}
            Maximilian Mustermann {"\n"}
            {"\n"}
            Musterstr. 10 {"\n"}
            12345 Musterstadt {"\n"}
            {"\n"}
            Telefon: +49 (0)123 45 67 89 {"\n"}
            Email: info@muster-online-shop.de {"\n"}
            Webseite: www.muster-online-shop.de {"\n"}
            {"\n"}
            Finanzamt Musterstadt {"\n"}
            USt-ID-Nr.: DE00000000
          </Text>
        </View>
        <View style={styles.bottomView}>
          <Button onPress={() => navigation.navigate("Home")} title="Home" />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Impressum;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  background: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 360,
    marginTop: 40,
  },
  body: {
    flexDirection: "row",
    marginTop: 30,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    flexDirection: "column",
  },
  impressum: {
    
  }
});

{/* <Stack.Screen name="Impressum" component={Impressum} />
Novo

<Tab.Screen
        name="Impressum"
        component={Impressum}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="law" size={size} color={"#646464"} />
          ),
        }}
      />





9h13
import { Octicons } from "@expo/vector-icons"; */}