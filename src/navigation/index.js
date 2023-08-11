import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LogInScreen from '../screens/LogInScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LogIn' component={LogInScreen}></Stack.Screen>
        <Stack.Screen name='CreateAccount' component={CreateAccountScreen}></Stack.Screen>
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen}></Stack.Screen>
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name='NewPassword' component={NewPasswordScreen}></Stack.Screen>
        <Stack.Screen name='HomeScreen' component={HomeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation