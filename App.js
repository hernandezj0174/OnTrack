import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import Logo from './assets/images/Logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <LogInScreen />
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
