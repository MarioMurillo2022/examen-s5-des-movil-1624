import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/screen/Inicio';
import BarraInicio from './src/components/BarraInicio';

export default function App() {
  return (
    <View style={styles.container}>
      <BarraInicio></BarraInicio>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
