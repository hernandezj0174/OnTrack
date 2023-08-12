import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
    
    const {
        control,
        handleSubmit,
        watch
    } = useForm();

    const pwd = watch('newPassword');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        console.warn('onSubmitPressed')

        navigation.navigate('HomeScreen')
    }

    const onBackToSignInPressed = () => {
        console.warn('onBackToSignInPressed')

        navigation.navigate('LogIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset Your Password</Text>

            <CustomInput 
                name='confirmationCode'
                placeholder="Confirmation Code"
                control={control}
                rules={{
                    required: 'Confirmation Code is required'
                }}
            />

            <CustomInput 
                name='newPassword'
                placeholder="New Password"
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'Password is required',
                    minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long'
                    },
                }}
            />

            <CustomInput 
                name='confirmPassword'
                placeholder="Confirm Password"
                control={control}
                secureTextEntry={true}
                rules={{
                    required: 'Confirm password is required',
                    validate: value => value == pwd || 'Passwords do not match'
                }}
            />

            <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

            <CustomButton text="Back to Sign In" onPress={onBackToSignInPressed} type='TERTIARY' />
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

export default NewPasswordScreen