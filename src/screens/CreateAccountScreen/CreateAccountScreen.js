import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("onRegisterPressed")

    navigation.navigate('ConfirmEmail')
  }

  const onSignInPressed = () => {
    console.warn('onSignInPressed')

    navigation.navigate('LogIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>

        <CustomInput 
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput 
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <CustomInput 
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput 
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

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