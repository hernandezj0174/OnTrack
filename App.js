import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen/CreateAccountScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen'
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
