// EditDeliverymanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { fetchDeliveryman, updateDeliveryman } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function EditDeliverymanScreen({ route, navigation }) {
  const [deliverymanName, setDeliverymanName] = useState('');
  const { id } = route.params;

  useEffect(() => {
    async function loadDeliveryman() {
      const deliveryman = await fetchDeliveryman(id);
      setDeliverymanName(deliveryman.name);
    }

    loadDeliveryman();
  }, [id]);

  const handleUpdate = async () => {
    await updateDeliveryman(id, { name: deliverymanName });
    navigation.navigate('DeliverymanDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier le coursier</Text>
      <TextInput
        style={styles.input}
        value={deliverymanName}
        onChangeText={setDeliverymanName}
        placeholder="Nom du coursier"
      />
      <Button title="Enregistrer" onPress={handleUpdate} />
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
