// AddDeliverymanScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { addDeliveryman } from '../services/api'; // Vous devez implémenter cette fonction dans votre fichier api

export default function AddDeliverymanScreen({ navigation }) {
  const [deliverymanName, setDeliverymanName] = useState('');

  const handleAdd = async () => {
    await addDeliveryman({ name: deliverymanName });
    navigation.navigate('DeliverymanList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un coursier</Text>
      <TextInput
        style={styles.input}
        value={deliverymanName}
        onChangeText={setDeliverymanName}
        placeholder="Nom du coursier"
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

