import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import Account from './models/Account';
import Header from './components/header';

export default function App() {
  const accountModel = new Account();
  accountModel.user='admin';
  accountModel.password='admin123';
  const [user, SetUser] = useState(accountModel.user);
  const [password, SetPassword] = useState(accountModel.password);
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <TextInput  style={styles.input} 
                    placeholder = "Email/Tên đăng nhập" 
                    onChangeText={(value)=> SetUser(value)}/>
        
        <TextInput  style={styles.input} 
                    placeholder = "Mật khẩu" 
                    onChangeText={(value)=> SetPassword(value)}/>
        <Text>user: {user}, password: {password}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  input: {
    margin: 10,
    height: 40,
    width: 200,
    borderColor: '#7a42f4',
    borderWidth: 1,
    padding: 3
  },
  content: {
    padding: 40
  }
});
