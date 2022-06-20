import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [Name,setName] = useState('sincollmm'); 
  const clickEvent = () => {
    setName('YOYOLMAO')
  }
  return (
    <View style={styles.container}>
      <Text>Name: {Name}</Text>
      <StatusBar style="auto" />
      <View>
          <Button title='Test' onPress={clickEvent}/>
      </View>
    </View>
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
