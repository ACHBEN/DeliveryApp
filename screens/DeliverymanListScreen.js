// DeliverymanListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { fetchDeliverymen } from '../services/api'; // Vous devez implémenter cette fonction dans votre fichier api

export default function DeliverymanListScreen({ navigation }) {
  const [deliverymen, setDeliverymen] = useState([]);
  
  useEffect(() => {
    async function loadDeliverymen() {
      const data = await fetchDeliverymen();
      setDeliverymen(data);
    }

    loadDeliverymen();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={deliverymen}
        keyExtractor={(item) => item.coursier_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DeliverymanDetail', { id: item.coursier_id })}>
            <Text style={styles.deliveryman}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Ajouter un coursier" onPress={() => navigation.navigate('AddDeliveryman')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryman: {
    fontSize: 18,
    marginBottom: 10,
  },
});
