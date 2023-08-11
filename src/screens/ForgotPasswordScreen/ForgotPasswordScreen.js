import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React , {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../LogInScreen/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn('onSignInPressed')

        navigation.navigate('NewPassword')
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
            placeholder="Username"
            value={username}
            setValue={setUsername}
            />

            <CustomButton text="Send" onPress={onSendPressed} />

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

export default ForgotPasswordScreen