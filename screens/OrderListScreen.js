// OrderListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchOrders } from '../services/api'; // Vous devez implémenter cette fonction dans votre fichier api

export default function OrderListScreen({ navigation }) {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    const data = await fetchOrders();
    setOrders(data);
  }

  useEffect(() => {
    loadOrders();
    const unsubscribe = navigation.addListener('focus', loadOrders);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.order_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('OrderDetail', { id: item.order_id })}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{item.name_customer}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AddOrder')}>
        <Text style={styles.buttonText}>Ajouter une commande</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F8F8F8',
  },
  listItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    justifyContent: 'center',
  },
  listItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#34A853',
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
