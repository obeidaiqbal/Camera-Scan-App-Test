import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; 

import Button from '@/components/Button';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Button A" />
        <Button label="Button B" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000ff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000ff',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 50,
    flex: 1 / 3,
    alignItems: 'center',
  },
});
