// DeliverymanListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchDeliverymen } from '../services/api';
import { AntDesign } from '@expo/vector-icons';

export default function DeliverymanListScreen({ navigation }) {
  const [deliverymen, setDeliverymen] = useState([]);

  const loadDeliverymen = async () => {
    const data = await fetchDeliverymen();
    setDeliverymen(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadDeliverymen);
    loadDeliverymen();
    return unsubscribe;
  }, [navigation]);

  const renderDeliverymanItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigation.navigate('DeliverymanDetail', { id: item.coursier_id })}
    >
      <Text style={styles.listItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <Text style={styles.emptyListText}>Aucun coursier disponible.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={deliverymen}
        keyExtractor={(item) => item.coursier_id.toString()}
        renderItem={renderDeliverymanItem}
        ListEmptyComponent={renderEmptyList}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddDeliveryman')}
      >
        <AntDesign name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listItem: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  listItemText: {
    fontSize: 18,
    textAlign: 'center',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyListText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#34A853',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
});
