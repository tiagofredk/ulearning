import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from '../Login/FormContainer';
import FormInput from '../Login/FormInput';
import FormSubmitButton from '../Login/FormSubmitButton';
import axios from 'axios';
import FormHeader from '../Login/FormHeader';
import { useNavigation } from '@react-navigation/native';
import FormInputMessage from './FormInputMessage';
import Nav from '../utils/Nav';

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, 'Invalid name!')
    .required('Name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
});

const ContactForm = () => {

  const navigation = useNavigation();

  const userInfo = {
    fullname: "",
    email: "",
    telephone: "",
    message: "",
  };

  const [error, setError] = useState('');

  const { fullname, email, telephone, message } = userInfo;

  const sendMessage = async (values, formikActions) => {
    const res = await axios.post('https://ulearning-backend.vercel.app/message', {
      ...values,
    });

    if (res.data.message) {
      alert("Success, Message sent")
      navigation.navigate("HomeStack")
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
  };

  return (
    <>
      <FormContainer>
        <FormHeader
          leftHeading='Contact Formular'
          rightHeading='Back'
          subHeading='Please fill with you basic information and one of our representative person will be in touch'
        />
        <Formik
          initialValues={userInfo}
          validationSchema={validationSchema}
          onSubmit={sendMessage}
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
            const { fullname, email, telephone, message } = values;
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
                  value={telephone}
                  error={touched.telephone && errors.telephone}
                  onChangeText={handleChange('telephone')}
                  onBlur={handleBlur('telephone')}
                  autoCapitalize='none'
                  label='Telephone'
                  placeholder='telephone'
                />
                <FormInputMessage
                  value={message}
                  error={touched.message && errors.message}
                  onChangeText={handleChange('message')}
                  onBlur={handleBlur('message')}
                  autoCapitalize='none'
                  label='Message'
                  placeholder='Your message'
                />

                <FormSubmitButton
                  submitting={isSubmitting}
                  onPress={handleSubmit}
                  title='Send Message'
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

export default ContactForm;
