// AddDeliverymanScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { addDeliveryman, fetchCategories } from '../services/api';

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
    if (!name || !adress || !recruitment_date || !Num_tel || !category_name) {
      return; // Empêche l'ajout si l'un des champs est vide
    }

    await addDeliveryman({
      name,
      adress,
      recruitment_date,
      Num_tel,
      category_name,
    });
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
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Catégorie :</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            style={styles.picker}
            selectedValue={category_name}
            onValueChange={(itemValue) => setCategoryName(itemValue)}
          >
            <Picker.Item label="Sélectionner une catégorie" value="" />
            {categories.map((category) => (
              <Picker.Item
                label={category.category_name}
                value={category.category_name}
                key={category.category_name}
              />
            ))}
          </Picker>
        </View>
      </View>
      <Button title="Ajouter" onPress={handleAdd} color="#3F51B5" />
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
    justifyContent: 'center', // Centrer le texte verticalement
    paddingHorizontal: 10, // Ajouter un peu d'espacement horizontal
  },
  picker: {
    height: 40,
    color: 'black',
  },
});
