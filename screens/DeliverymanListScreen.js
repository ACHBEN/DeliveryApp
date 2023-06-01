// DeliverymanListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { fetchDeliverymen } from '../services/api';

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

  return (
    <View style={styles.container}>
      <FlatList
        data={deliverymen}
        keyExtractor={(item) => item.coursier_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('DeliverymanDetail', { id: item.coursier_id })}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AddDeliveryman')}>
        <Text style={styles.buttonText}>Ajouter un coursier</Text>
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
