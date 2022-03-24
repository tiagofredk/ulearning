import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const UserProfile = () => {

  const screen = useWindowDimensions();

  const navigation = useNavigation();

  const { setToken, user, isLogedIn, setIsLogedIn, profile, setProfile } = useContext(MainContext);

  const logout = async () => {
    try {
      let config = {
        header: { "content-type": "aplication/json" },
      };
      const data = await axios.get(
        "https://ulearning-backend.vercel.app/logout",
        config
      );

      setIsLogedIn(false);
      setProfile("");
      setToken("");

      navigation.navigate("Home");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View >
      <View style={[styles.container, { width: screen.width, height: 200 }]}>
        <View style={styles.viewimg} >
          <FontAwesome5 style={styles.user} name="user" size={90} color="#aaaaaa" />
        </View>
        <Text style={styles.usertextprofile}>Profile</Text>
        <Text style={styles.usertext}>{profile.fullname}</Text>
      </View>

      <View style={[styles.container2, { width: screen.width, height: 200 }]}>
        {isLogedIn ?
          <View>

            <View style={styles.profile}>
              <Text style={styles.profiletext}>General</Text>
              <View style={styles.general}>
                <View>
                  <Text style={styles.generaltext}>Profile settings</Text>
                  <Text style={styles.generalsub}>Update and modify your profile</Text>
                </View>
                <AntDesign name="right" size={18} color="#aaaaaa" />
              </View>
              <View style={styles.general}>
                <View>
                  <Text style={styles.generaltext}>Privacy</Text>
                  <Text style={styles.generalsub}>Change your password</Text>
                </View>
                <AntDesign name="right" size={18} color="#aaaaaa" />
              </View>
              <View style={styles.general}>
                <View>
                  <Text style={styles.generaltext}>Settings</Text>
                  <Text style={styles.generalsub}>Personalize and change your preferences</Text>
                </View>
                <AntDesign name="right" size={18} color="#aaaaaa" />
              </View>
            </View>

            <TouchableOpacity onPress={() => logout()} style={styles.button} >
              <Text style={{ textAlign: "center" }}>Disconnect</Text>
            </TouchableOpacity>
            <View style={styles.impressum}>
              <Text>Want to know more about us? </Text>
              <Text style= {{fontWeight:"bold", color:"#493d8a"}} >Impressum</Text>
            </View>
          </View>

          :
          <>
            <TouchableOpacity onPress={() => navigation.navigate("LoginDecision")} style={[styles.button, { marginTop: 100 }]} >
              <Text style={{ textAlign: "center" }}>Login</Text>
            </TouchableOpacity>

            <View style={styles.impressum}>
              <Text>Want to know more about us? </Text>
              <Text style= {{fontWeight:"bold", color:"#493d8a"}} >Impressum</Text>
            </View>
          </>
        }
      </View>
    </View >
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#97c3e7"
  },
  container2: {
    // zIndex: 1,
  },
  viewimg: {
    position: "absolute",
    top: 100,
    left: 110,
    width: 144,
    height: 144,
    borderRadius: 100,
    backgroundColor: "#eeeeee",
    alignItems: "center",
  },
  user: {
    marginTop: 20,
  },
  usertext: {
    textAlign: "center",
    top: 247,
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
  },
  usertextprofile: {
    top: 40,
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
    letterSpacing: 5,
    textAlign: "center"
  },
  profile: {
    marginTop: 120,
    marginLeft: 20,
  },
  profiletext: {
    fontSize: 18,
    margin: 3,
    color: "#aaaaaa",
    fontWeight: "bold",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#97c3e7",
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    alignSelf: "center",
    marginTop: 10
  },
  general: {
    backgroundColor: "#fff",
    width: 300,
    height: 60,
    margin: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  generaltext: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 5
  },
  generalsub: {
    color: "#aaaaaa",
    marginLeft: 5
  },
  impressum: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  }
});
