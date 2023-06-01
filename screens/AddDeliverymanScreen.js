// AddDeliverymanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { addDeliveryman, fetchCategories } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function AddDeliverymanScreen({ navigation }) {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [recruitment_date, setRecruitmentDate] = useState('');
  const [Num_tel, setNumTel] = useState('');
  const [category_name, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);

  const handleAdd = async () => {
    await addDeliveryman({ name, adress, recruitment_date, Num_tel, category_name });
    navigation.navigate('DeliverymanList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter un coursier</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Nom du coursier"
      />
      <TextInput
        style={styles.input}
        value={adress}
        onChangeText={setAdress}
        placeholder="Adresse"
      />
      <TextInput
        style={styles.input}
        value={recruitment_date}
        onChangeText={setRecruitmentDate}
        placeholder="Date de recrutement"
      />
      <TextInput
        style={styles.input}
        value={Num_tel}
        onChangeText={setNumTel}
        placeholder="Numéro de téléphone"
      />
      <Picker
        selectedValue={category_name}
        onValueChange={(itemValue) => setCategoryName(itemValue)}
      >
        {categories.map((category) => (
          <Picker.Item label={category.category_name} value={category.category_name} key={category.category_name} />
        ))}
      </Picker>
      <Button title="Ajouter" onPress={handleAdd} />
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
});
