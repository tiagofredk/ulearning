import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from '../Login/FormContainer';
import FormInput from '../Login/FormInput';
import FormSubmitButton from '../Login/FormSubmitButton';
import axios from 'axios';
import FormHeader from '../Login/FormHeader';
import { useNavigation } from '@react-navigation/native';
import Nav from '../utils/Nav';

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(8, 'Password is too short!')
    .required('Password is required!'),
  confirmPassword: Yup.string().equals(
    [Yup.ref('password'), null],
    'Password does not match!'
  ),
});

const SignupForm = () => {
  const navigation = useNavigation();
  const userInfo = {
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [error, setError] = useState('');

  const { fullname, email, password, confirmPassword } = userInfo;
  console.log(userInfo);
  const signUp = async (values, formikActions) => {
    const res = await axios.post('https://ulearning-backend.vercel.app/adduser', {
      ...values,
    });

    if (res.data.message) {
      alert("Success, you sign up. please login")
      navigation.navigate("Login")
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <>

      <FormContainer>
        <FormHeader
          leftHeading='Create an Account'
          rightHeading='Back'
          subHeading='By using our services you are agreeing to our Terms and Privacy Statament'
        />
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={signUp}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            const { fullname, email, password, confirmPassword } = values;
            return (
              <>
                <FormInput
                  value={fullname}
                  error={touched.fullname && errors.fullname}
                  onChangeText={handleChange('fullname')}
                  onBlur={handleBlur('fullname')}
                  label='Full Name'
                  placeholder='John Smith'
                />
                <FormInput
                  value={email}
                  error={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize='none'
                  label='Email'
                  placeholder='example@email.com'
                />
                <FormInput
                  value={password}
                  error={touched.password && errors.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize='none'
                  secureTextEntry
                  label='Password'
                  placeholder='********'
                />
                <FormInput
                  value={confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  autoCapitalize='none'
                  secureTextEntry
                  label='Confirm Password'
                  placeholder='********'
                />
                <FormSubmitButton
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  title='Sign up'
                />
              </>
            );
          }}
        </Formik>
      </FormContainer>
      <Nav />
    </>
  );
};

const styles = StyleSheet.create({

});

export default SignupForm;
