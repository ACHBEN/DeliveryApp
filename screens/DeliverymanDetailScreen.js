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
      <Text style={styles.detail}>Nom : {deliveryman.name}</Text>
      <Text style={styles.detail}>Adresse : {deliveryman.adress}</Text>
      <Text style={styles.detail}>Date de recrutement : {deliveryman.recruitment_date}</Text>
      <Text style={styles.detail}>Numéro de téléphone : {deliveryman.Num_tel}</Text>
      <Text style={styles.detail}>Catégorie : {deliveryman.category_name}</Text>
      <Button title="Modifier" onPress={() => navigation.navigate('EditDeliveryman', { coursier_id: deliveryman.coursier_id })} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});
