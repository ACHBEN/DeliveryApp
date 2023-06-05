// SuperHomePage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SuperHomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans notre système de gestion des commandes et des coursiers</Text>
      <Text style={styles.description}>
        Ici, vous pouvez facilement gérer vos commandes et vos coursiers en quelques clics.
      </Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    backgroundColor: '#3F51B5',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
