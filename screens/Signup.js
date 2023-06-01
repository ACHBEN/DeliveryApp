// Signup.js
import React, { useState } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import { registerUser } from '../services/api';

const Signup = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    // Check if inputs are valid
    if (login === '' || password === '') {
      Alert.alert('Error', 'Both fields are required');
      return;
    }
    // API call to register user
    try {
      const user = { login: login, password: password };
      const data = await registerUser(user);

      Alert.alert('Success', 'Registration successful');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Registration failed: ' + error.message);
    } 
  };

  return (
    <View>
      <TextInput placeholder="Login" onChangeText={setLogin} value={login} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Signup" onPress={register} />
    </View>
  );
};

export default Signup;