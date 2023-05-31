// AddCategoryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addCategory } from '../services/api'; // Assurez-vous d'implémenter cette fonction dans votre fichier api.js

export default function AddCategoryScreen({ navigation }) {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    await addCategory({ category_name: categoryName, description });
    navigation.goBack(); // pour revenir à l'écran précédent après l'ajout d'une nouvelle catégorie
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nom de la catégorie:</Text>
      <TextInput 
        style={styles.input}
        value={categoryName} 
        onChangeText={setCategoryName} 
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput 
        style={styles.input}
        value={description} 
        onChangeText={setDescription} 
      />
      <Button title="Ajouter" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
});
