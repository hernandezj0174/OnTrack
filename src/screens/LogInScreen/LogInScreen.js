import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import Logo from '../../../assets/images/Logo.png'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from './CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const LogInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {width} = useWindowDimensions();
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const onLogInPressed = () => {
    console.warn("Sign In")
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput 
          placeholder="Password"
          value={password}
          setValue={setPassword}
        />

        <CustomButton text="Log In" onPress={onLogInPressed} />
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