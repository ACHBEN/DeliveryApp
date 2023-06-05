import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { fetchOrder, updateOrder, fetchDeliverymen } from '../services/api';

export default function EditOrderScreen({ route, navigation }) {
  const [nameCustomer, setNameCustomer] = useState('');
  const [nameRestaurant, setNameRestaurant] = useState('');
  const [adressCustomer, setAdressCustomer] = useState('');
  const [adressRestaurant, setAdressRestaurant] = useState('');
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);
  const [coursierId, setCoursierId] = useState(null);
  const [deliverymen, setDeliverymen] = useState([]);

  const { id } = route.params;

  useEffect(() => {
    async function loadData() {
      const order = await fetchOrder(id);
      const deliverymenData = await fetchDeliverymen();

      setNameCustomer(order.name_customer);
      setNameRestaurant(order.name_restaurant);
      setAdressCustomer(order.adress_customer);
      setAdressRestaurant(order.adress_restaurant);
      setPrice(order.price);
      setDistance(order.distance);
      setCoursierId(order.coursier_id);
      setDeliverymen(deliverymenData);
    }

    loadData();
  }, [id]);

  const handleUpdate = async () => {
    await updateOrder(id, {
      name_customer: nameCustomer,
      name_restaurant: nameRestaurant,
      adress_customer: adressCustomer,
      adress_restaurant: adressRestaurant,
      price: price,
      distance: distance,
      coursier_id: coursierId,
    });
    navigation.navigate('OrderDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modifier la commande</Text>

      <TextInput
        style={styles.input}
        value={nameCustomer}
        onChangeText={setNameCustomer}
        placeholder="Nom du client"
      />

      <TextInput
        style={styles.input}
        value={nameRestaurant}
        onChangeText={setNameRestaurant}
        placeholder="Nom du restaurant"
      />

      <TextInput
        style={styles.input}
        value={adressCustomer}
        onChangeText={setAdressCustomer}
        placeholder="Adresse du client"
      />

      <TextInput
        style={styles.input}
        value={adressRestaurant}
        onChangeText={setAdressRestaurant}
        placeholder="Adresse du restaurant"
      />

      <TextInput
        style={styles.input}
        value={price.toString()}
        onChangeText={(value) => setPrice(Number(value))}
        placeholder="Prix"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={distance.toString()}
        onChangeText={(value) => setDistance(Number(value))}
        placeholder="Distance"
        keyboardType="numeric"
      />

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>ID du coursier :</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            style={styles.picker}
            selectedValue={coursierId}
            onValueChange={(itemValue) => setCoursierId(itemValue)}
          >
            <Picker.Item label="Sélectionner un coursier" value={null} />
            {deliverymen.map((deliveryman) => (
              <Picker.Item
                label={deliveryman.coursier_id.toString()}
                value={deliveryman.coursier_id}
                key={deliveryman.coursier_id}
              />
            ))}
          </Picker>
        </View>
      </View>

      <Button title="Enregistrer" onPress={handleUpdate} color="#3F51B5" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  pickerWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    color: 'black',
  },
});
