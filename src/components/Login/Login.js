import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import FormSubmitButton from './FormSubmitButton'
import FormContainer from './FormContainer'
import FormHeader from './FormHeader'
import FormInput from './FormInput'
import { MainContext } from '../../context/MainContext'
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import axios from 'axios'
import Nav from '../utils/Nav'

const Login = () => {
  const navigation = useNavigation();
  
  const { setUser, isLogedIn, setIsLogedIn, profile, setProfile } = useContext(MainContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError('Required all fields!', setError);

    if (!isValidEmail(email)) return updateError('Invalid email!', setError);

    if (!password.trim() || password.length < 7)
      return updateError('Password is too short!', setError);
    return true;
  };

  if (error != "") {
    alert(error)
  }

  const submitForm = async () => {

    if (isValidForm()) {

      try {

        let config = {
          header: {
            Accept: 'application/json',
            "content-Type": "application/json"
          }
        };

        const res = await axios.post(
          "https://ulearning-backend.vercel.app/login",
          userInfo,
          config
        )

        console.log(res.data.message)
        if (res.data.message === "Incorrect email") {
          alert("incorrect email")
        } else if (res.data.message === "Incorrect password") {
          alert("Incorrect password")
        } else {

          let fullname = res.data.fullname;
          // Split the firts name from fullname and set as user name
          setUser(res.data.fullname.split(' ').slice(0, -1).join(' '))

          let userProfile = { fullname, email }

          setProfile(userProfile);

          setUserInfo({ email: '', password: '' });
          setIsLogedIn(true);
          navigation.navigate("Home");
        }

      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <SafeAreaView>
          <FormHeader
            leftHeading='Log In'
            rightHeading='Back'
            subHeading='By using our services you are agreeing to our Terms and Privacy Statament'
          />
          <FormInput
            value={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            label='Email'
            placeholder='E-mail'
            autoCapitalize='none'
          />
          <FormInput
            value={password}
            onChangeText={value => handleOnChangeText(value, 'password')}
            label='Password'
            placeholder='********'
            autoCapitalize='none'
            secureTextEntry
          />
          <FormSubmitButton onPress={submitForm} title='Login' />

        </SafeAreaView>
        <View style={styles.sigin} >
          <Text style={styles.text1} >New Here?</Text>
          <Text style={styles.text} onPress={() => navigation.navigate("Signin")}> Create an account</Text>
        </View>
      </FormContainer>
      <Nav />
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: "center",
    color: "#493d8a",
    fontWeight: "bold"
  },
  text1: {
    textAlign: "center",
  },
  sigin: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 100,
    textAlign: "center",
  }
})