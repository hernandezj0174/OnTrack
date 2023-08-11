import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const navigation = useNavigation();

    const [code, setCode] = useState('');

    const onConfirmPressed = () => {
        console.warn('onSignInPressed')

        navigation.navigate('HomeScreen')
    }

    const onResendPressed = () => {
        console.warn('onResendPressed')
    }

    const onBackToSignInPressed = () => {
        console.warn('onBackToSignInPressed')

        navigation.navigate('LogIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm Your Email</Text>

            <CustomInput 
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
            />

            <CustomButton text="Confirm" onPress={onConfirmPressed} />

            <CustomButton text="Resend Code" onPress={onResendPressed} type='SECONDARY' />

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

export default ConfirmEmailScreen