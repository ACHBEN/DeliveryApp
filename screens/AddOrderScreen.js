// AddOrderScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { addOrder } from '../services/api'; // Vous devez implémenter cette fonction dans votre fichier api

export default function AddOrderScreen({ navigation }) {
  const [nameCustomer, setNameCustomer] = useState('');
  const [nameRestaurant, setNameRestaurant] = useState('');
  const [adressCustomer, setAdressCustomer] = useState('');
  const [adressRestaurant, setAdressRestaurant] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');

  const handleAdd = async () => {
    await addOrder({
      name_customer: nameCustomer,
      name_restaurant: nameRestaurant,
      adress_customer: adressCustomer,
      adress_restaurant: adressRestaurant,
      price,
      distance,
      //coursier_id est supposé être géré côté serveur
    });
    navigation.navigate('OrderList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une commande</Text>
      <TextInput
        style={styles.input}
        value={nameCustomer}
        onChangeText={setNameCustomer}
        placeholder="Nom du client"
      />
      <TextInput
        style={styles.input}
        value={nameRestaurant}
        onChangeText={setNameRestaurant}
        placeholder="Nom du restaurant"
      />
      <TextInput
        style={styles.input}
        value={adressCustomer}
        onChangeText={setAdressCustomer}
        placeholder="Adresse du client"
      />
      <TextInput
        style={styles.input}
        value={adressRestaurant}
        onChangeText={setAdressRestaurant}
        placeholder="Adresse du restaurant"
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder="Prix"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={distance}
        onChangeText={setDistance}
        placeholder="Distance"
        keyboardType="numeric"
      />
      <Button title="Ajouter" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
