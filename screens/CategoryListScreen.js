// CategoryListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import { fetchCategories, deleteCategory } from '../services/api'; // Vous devez implémenter ces fonctions dans votre fichier api

export default function CategoryListScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await fetchCategories();
      setCategories(data);
    }

    loadCategories();
  }, []);

  const handleDelete = async (category_name) => {
    await deleteCategory(category_name);
    // Refresh the list after deleting
    const data = await fetchCategories();
    setCategories(data);
  };

  return (
    <View style={styles.container}>
      <Button title="Ajouter une catégorie" onPress={() => navigation.navigate('AddCategory')} />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.category}>{item.category_name}</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Détails" onPress={() => navigation.navigate('CategoryDetail', { category_name: item.category_name })} />
              <Button title="Supprimer" onPress={() => handleDelete(item.category_name)} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.category_name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 1,
    padding: 10,
  },
  category: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
