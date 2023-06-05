import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { fetchOrder, updateOrder } from '../services/api';

export default function EditOrderScreen({ route, navigation }) {
  const [nameCustomer, setNameCustomer] = useState('');
  const [nameRestaurant, setNameRestaurant] = useState('');
  const [adressCustomer, setAdressCustomer] = useState('');
  const [adressRestaurant, setAdressRestaurant] = useState('');
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [coursierId, setCoursierId] = useState(null);
  
  const { id } = route.params;

  useEffect(() => {
    async function loadOrder() {
      const order = await fetchOrder(id);
      setNameCustomer(order.name_customer);
      setNameRestaurant(order.name_restaurant);
      setAdressCustomer(order.adress_customer);
      setAdressRestaurant(order.adress_restaurant);
      setPrice(order.price);
      setDistance(order.distance);
      setCoursierId(order.coursier_id);
    }
  
    loadOrder();
  }, [id]);
  

  const handleUpdate = async () => {
    await updateOrder(id, { 
      name_customer: nameCustomer,
      name_restaurant: nameRestaurant,
      adress_customer: adressCustomer,
      adress_restaurant: adressRestaurant,
      price: price,
      distance: distance,
      coursier_id: coursierId,
    });
    navigation.navigate('OrderDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier la commande</Text>

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
        value={price.toString()} // convertir le prix en chaîne pour l'affichage dans TextInput
        onChangeText={value => setPrice(Number(value))} // convertir la chaîne entrée en nombre
        placeholder="Prix"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={distance.toString()} // convertir la distance en chaîne pour l'affichage dans TextInput
        onChangeText={value => setDistance(Number(value))} // convertir la chaîne entrée en nombre
        placeholder="Distance"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={coursierId ? coursierId.toString() : ''} // convertir l'ID du coursier en chaîne pour l'affichage dans TextInput
        onChangeText={value => setCoursierId(value ? Number(value) : null)} // convertir la chaîne entrée en nombre ou null si la chaîne est vide
        placeholder="ID du coursier"
        keyboardType="numeric"
      />

      <Button title="Enregistrer" onPress={handleUpdate} color="#3F51B5"/>
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
