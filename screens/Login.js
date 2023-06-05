import React, { useState, useContext } from 'react';
import { Button, TextInput, View, Alert, StyleSheet } from 'react-native';
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
        <Button
          title="Login"
          onPress={handleLogin}
          style={styles.button}
          color="#3F51B5"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Signup"
          onPress={() => navigation.navigate('Signup')}
          style={styles.button}
          color="#3F51B5"
        />
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
    backgroundColor: '#3F51B5',
    fontWeight: 'bold',
  },
});

export default Login;
