// HomeScreen.js
// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Bienvenue dans votre application de gestion des livraisons!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Voir les commandes"
          onPress={() => navigation.navigate('OrderList')}
          style={styles.button}
        />
        <Button
          title="Voir les coursiers"
          onPress={() => navigation.navigate('DeliverymanList')}
          style={styles.button}
        />
        <Button
          title="Voir les catégories"
          onPress={() => navigation.navigate('CategoryList')}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  welcomeMessage: {
    fontSize: 24,
    marginBottom: 20,
    color: '#4285F4',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-around',
    height: '50%',
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: '#4285F4',
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
