import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import React , {useState, useEffect} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify'

// Default email regex pattern used for validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const CreateAccountScreen = () => {

  const {
    control, 
    handleSubmit, 
    watch
  } = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = async data => {
    const {username, password, email, name} = data;

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name, preferred_username: username},
      });

      navigation.navigate('ConfirmEmail');

    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPressed = () => {
    console.warn('onSignInPressed')

    navigation.navigate('LogIn')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>

        <CustomInput 
          name='name'
          placeholder='Name'
          control={control}
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be a maximum of 24 characters long',
            },
          }}
        />

        <CustomInput 
          name='username'
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required'
          }}
        />

        <CustomInput 
          name='email'
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email'
            }
          }}
        />

        <CustomInput 
          name='password'
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long'
            },
          }}
        />

        <CustomInput 
          name='repeatPassword'
          placeholder="Repeat Password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Confirm password is required',
            validate: value => value == pwd || 'Passwords do not match'
          }}
        />

        <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

        <CustomButton text="Already have an account? Sign In" onPress={onSignInPressed} type='TERTIARY'/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    maxHeight: 200,
    maxWidth: 300,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  }
});

export default CreateAccountScreen