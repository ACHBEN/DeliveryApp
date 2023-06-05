// OrderDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { fetchOrder, deleteOrder } from '../services/api';

export default function OrderDetailScreen({ route, navigation }) {
  const [order, setOrder] = useState(null);
  const { id } = route.params;

  const handleDelete = async () => {
    Alert.alert(
      'Confirmation',
      'Êtes-vous sûr de vouloir supprimer cette commande ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteOrder(id);
              alert('Commande supprimée avec succès');
              navigation.goBack();
            } catch (error) {
              alert("Une erreur s'est produite lors de la suppression de la commande");
            }
          },
        },
      ]
    );
  };

  const loadOrder = async () => {
    const data = await fetchOrder(id);
    setOrder(data);
  };

  useEffect(() => {
    loadOrder();

    const unsubscribe = navigation.addListener('focus', () => {
      loadOrder();
    });

    return unsubscribe;
  }, [navigation, id]);

  if (!order) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détails de la commande</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Nom du client:</Text>
        <Text style={styles.value}>{order.name_customer}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Nom du restaurant:</Text>
        <Text style={styles.value}>{order.name_restaurant}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Adresse du client:</Text>
        <Text style={styles.value}>{order.adress_customer}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Adresse du restaurant:</Text>
        <Text style={styles.value}>{order.adress_restaurant}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Prix:</Text>
        <Text style={styles.value}>{order.price}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Distance:</Text>
        <Text style={styles.value}>{order.distance}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>ID du coursier:</Text>
        <Text style={styles.value}>{order.coursier_id}</Text>
      </View>
      <Button title="Modifier" onPress={() => navigation.navigate('EditOrder', { id: order.order_id })} />
      <Button title="Supprimer" onPress={handleDelete} color="#f44336" />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});