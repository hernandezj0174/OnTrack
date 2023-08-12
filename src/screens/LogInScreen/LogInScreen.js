import { View, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from './CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

const LogInScreen = () => {
  const {
    control, 
    handleSubmit,
    formState: {errors}
  } = useForm();

  console.log(errors);

  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onLogInPressed = (data) => {
    console.log(data);
    console.warn("Sign In");
    //validate user

    navigation.navigate('HomeScreen');
  }

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password")

    navigation.navigate('ForgotPassword')
  }

  const onCreateAccountPressed = () => {
    console.warn("Create Account")

    navigation.navigate('CreateAccount')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {width: width * 0.7}, {height: height * 0.3}]}
          resizeMode='contain'
        />

        <CustomInput 
          name='username'
          placeholder='Username'
          control={control}
          rules={{required: 'Username is required'}}
        />

        <CustomInput 
          name='password'
          placeholder='Password'
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            }
          }}
        />

        <CustomButton text="Log In" onPress={handleSubmit(onLogInPressed)} />
        <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
        <CustomButton text="Don't have an account? Create One" onPress={onCreateAccountPressed} type="TERTIARY" />
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
});

export default LogInScreen