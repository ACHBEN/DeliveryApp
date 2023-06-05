import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import { fetchDeliveryman, deleteDeliveryman } from '../services/api';

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
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de vouloir supprimer ce coursier ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            await deleteDeliveryman(id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  if (!deliveryman) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails du coursier</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nom :</Text>
        <Text style={styles.value}>{deliveryman.name}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Adresse :</Text>
        <Text style={styles.value}>{deliveryman.adress}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Date de recrutement :</Text>
        <Text style={styles.value}>{deliveryman.recruitment_date}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Numéro de téléphone :</Text>
        <Text style={styles.value}>{deliveryman.Num_tel}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Catégorie :</Text>
        <Text style={styles.value}>{deliveryman.category_name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Modifier" onPress={() => navigation.navigate('EditDeliveryman', { coursier_id: deliveryman.coursier_id })} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Supprimer" onPress={handleDelete} color="#f44336" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    marginBottom: 10,
  },
});
