// OrderDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { fetchOrder, deleteOrder } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function OrderDetailScreen({ route, navigation }) {
  const [order, setOrder] = useState(null);
  const { id } = route.params;

  const handleDelete = async () => {
    try {
      await deleteOrder(id); // Supposons que vous ayez une fonction deleteOrder dans votre fichier api.js
      alert('Commande supprimée avec succès');
      navigation.goBack(); // Retourne à l'écran précédent
    } catch (error) {
      alert('Une erreur s\'est produite lors de la suppression de la commande');
    }
  };

  const loadOrder = async () => {
    const data = await fetchOrder(id);
    setOrder(data);
  }

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
      <Text style={styles.item}>Nom du client: {order.name_customer}</Text>
      <Text style={styles.item}>Nom du restaurant: {order.name_restaurant}</Text>
      <Text style={styles.item}>Adresse du client: {order.adress_customer}</Text>
      <Text style={styles.item}>Adresse du restaurant: {order.adress_restaurant}</Text>
      <Text style={styles.item}>Prix: {order.price}</Text>
      <Text style={styles.item}>Distance: {order.distance}</Text>
      <Text style={styles.item}>ID du coursier: {order.coursier_id}</Text>
      <Button title="Modifier" onPress={() => navigation.navigate('EditOrder', { id: order.order_id })} />
      <Button title="Supprimer" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
  },
});
