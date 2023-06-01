// Login.js
import React, { useState, useContext } from 'react';
import { Button, TextInput, View, Alert } from 'react-native';
import { loginUser } from '../services/api';
import AuthContext from '../AuthContext';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = async () => {
    // Check if inputs are valid
    if (login === '' || password === '') {
      Alert.alert('Error', 'Both fields are required');
      return;
    }
  
    // API call to login user
    const success = await loginUser(login, password);
  
    // Check if the login was successful
    if (!success) {
      // Login failed, show error message
      Alert.alert('Error', 'Invalid credentials');
    } else {
      // Login was successful, navigate to Home
      Alert.alert('Success', 'Login successful');
      setIsAuthenticated(true);
      navigation.navigate('Home');
    }

    // Réinitialise les champs de saisie après la tentative de connexion
    setLogin('');
    setPassword('');
  };
  
  return (
    <View>
      <TextInput placeholder="Login" onChangeText={setLogin} value={login} />
      <TextInput placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default Login;

