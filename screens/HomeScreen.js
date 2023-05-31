import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Bienvenue dans votre application de gestion des livraisons!</Text>
      <Button
        title="Voir les commandes"
        onPress={() => navigation.navigate('OrderList')}
      />
      <Button
        title="Voir les coursiers"
        onPress={() => navigation.navigate('DeliverymanList')}
      />
      <Button
        title="Voir les catégories"
        onPress={() => navigation.navigate('CategoryList')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMessage: {
    fontSize: 24,
    marginBottom: 20,
  },
});

