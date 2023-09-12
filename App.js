import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import APIDemo from './src/APIDemo';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Okay!</Text> */}
      <StatusBar style="auto" />
      {/* <Text>Hello</Text> */}
      <APIDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
