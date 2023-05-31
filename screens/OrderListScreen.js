// OrderListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { fetchOrders } from '../services/api'; // Vous devez implémenter cette fonction dans votre fichier api

export default function OrderListScreen({ navigation }) {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const data = await fetchOrders();
    setOrders(data);
  }

  useEffect(() => {
    loadOrders();

    // L'écouteur de focus pour recharger les commandes lorsque l'écran est mis en avant-plan
    const unsubscribe = navigation.addListener('focus', () => {
      loadOrders();
    });

    return unsubscribe;
  }, [navigation]);

    return (
        <View style={styles.container}>
          <FlatList
            data={orders}
            keyExtractor={(item) => item.order_id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('OrderDetail', { id: item.order_id })}>
                <Text style={styles.order}>{item.name_customer}</Text>
              </TouchableOpacity>
            )}
          />
          <Button title="Ajouter une commande" onPress={() => navigation.navigate('AddOrder')} />
        </View>
      );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    fontSize: 18,
    marginBottom: 10,
  },
});
