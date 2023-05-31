// DeliverymanDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { fetchDeliveryman, deleteDeliveryman } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function DeliverymanDetailScreen({ route, navigation }) {
  const [deliveryman, setDeliveryman] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    async function loadDeliveryman() {
      const data = await fetchDeliveryman(id);
      setDeliveryman(data);
    }

    loadDeliveryman();
  }, [id]);

  const handleDelete = async () => {
    await deleteDeliveryman(id);
    navigation.goBack();
  };

  if (!deliveryman) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.deliverymanName}>{deliveryman.name}</Text>
      <Button title="Modifier" onPress={() => navigation.navigate('EditDeliveryman', { id: deliveryman.id })} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliverymanName: {
    fontSize: 24,
    marginBottom: 20,
  },
});
