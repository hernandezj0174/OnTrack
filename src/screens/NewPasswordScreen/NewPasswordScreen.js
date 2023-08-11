import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
            placeholder="Confirmation Code"
            value={code}
            setValue={setCode}
            />

            <CustomInput 
            placeholder="New Password"
            value={newPassword}
            setValue={setNewPassword}
            />

            <CustomInput 
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            />

            <CustomButton text="Submit" onPress={onSubmitPressed} />

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