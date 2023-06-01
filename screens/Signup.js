// Signup.js
import React, { useState, useContext } from 'react';
import { Button, TextInput, View, Alert, StyleSheet } from 'react-native';
import { registerUser } from '../services/api';
import AuthContext from '../AuthContext';

const Signup = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(AuthContext);

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
      setIsAuthenticated(true);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Registration failed: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={setLogin}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={register} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#F8F8F8',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    color: '#000',
  },
  buttonContainer: {
    marginBottom: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#4285F4',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Signup;