import { StyleSheet, Text, View } from 'react-native';
import CartaComponent from './CartaComponent';

export default function App() {
  return (
   <CartaComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
